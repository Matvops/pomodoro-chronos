import { useEffect, useReducer } from "react"
import { TaskContext } from "."
import { initialState } from "./initialTaskState"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { TaskActionTypes } from "./taskActions"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [task, dispatch] = useReducer(taskReducer, initialState);
  
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {

    const countDownSeconds = event.data;

    if(countDownSeconds <= 0) {
      dispatch({ type: TaskActionTypes.COMPLETE_TASK })
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

  return (
    <TaskContext.Provider value={{task, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}