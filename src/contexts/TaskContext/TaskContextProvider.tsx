import { useState } from "react"
import { TaskContext } from "."
import type { TaskModelState } from "../../models/TaskModelState"
import { initialState } from "./initialTaskState"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [task, setTask] = useState<TaskModelState>(initialState) 

  return (
    <TaskContext.Provider value={{task, setTask}}>
      {children}
    </TaskContext.Provider>
  )
}