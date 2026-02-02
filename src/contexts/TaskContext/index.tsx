import { createContext } from "react";
import type { TaskModelState } from "../../models/TaskModelState";
import { initialState } from "./initialTaskState";

type TaskContextProps = {
  task: TaskModelState,
  setTask: React.Dispatch<React.SetStateAction<TaskModelState>>
};

const initialTaskContext = {
  task: initialState,
  setTask: () => {}
};

export const TaskContext = createContext<TaskContextProps>(initialTaskContext);

