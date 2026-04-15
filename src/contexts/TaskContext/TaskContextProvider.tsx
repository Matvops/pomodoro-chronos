import { useEffect, useReducer, useRef } from "react"
import { TaskContext } from "."
import { initialState } from "./initialTaskState"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { TaskActionTypes } from "./taskActions"
import { loadBeep } from "../../utils/loadBeep"
import { showMessage } from "../../adapters/showMessage"
import type { TaskModelState } from "../../models/TaskModelState"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [task, dispatch] = useReducer(taskReducer, initialState, () => {

    const stateStorage = localStorage.getItem('state');

    if(!stateStorage) return initialState;

    const parsedStateStorage = JSON.parse(stateStorage) as TaskModelState;

    return {
      ...parsedStateStorage,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00'
    };
  });
  
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

    localStorage.setItem('state', JSON.stringify(task));

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

  useEffect(() => {

    document.title = task.secondsRemaining > 0 ? `${task.formattedSecondsRemaining} - Pomodoro` : 'Chronos Pomodoro';

  }, [task]);

  return (
    <TaskContext.Provider value={{task, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}