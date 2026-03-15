import { useEffect, useReducer, useRef } from "react"
import { TaskContext } from "."
import { initialState } from "./initialTaskState"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { TaskActionTypes } from "./taskActions"
import { loadBeep } from "../../utils/loadBeep"
import { showMessage } from "../../adapters/showMessage"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [task, dispatch] = useReducer(taskReducer, initialState);
  
  const beep = useRef<() => void | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {

    const countDownSeconds = event.data;

    if(countDownSeconds <= 0) {
      dispatch({ type: TaskActionTypes.COMPLETE_TASK })
      showMessage.success('Ciclo completado');
      worker.terminate();
    } else {
      dispatch({ type: TaskActionTypes.COUNT_DOWN, payload: { secondsRemaining: countDownSeconds } })
    }

  })


  useEffect(() => {
    if(!task.activeTask) {
      worker.terminate();
    }

    worker.postMessage(task);

    console.log(task);
  }, [worker, task]);

  useEffect(() => {

    if(task.activeTask && beep.current === null) {
      beep.current = loadBeep();
      beep.current();
    } else {
      beep.current = null;
    }


  }, [task.activeTask]);

  return (
    <TaskContext.Provider value={{task, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}