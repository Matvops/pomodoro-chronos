import { useEffect, useReducer } from "react"
import { TaskContext } from "."
import { initialState } from "./initialTaskState"
import { taskReducer } from "./taskReducer"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [task, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <TaskContext.Provider value={{task, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}