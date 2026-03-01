import { createContext } from "react";
import type { TaskModelState } from "../../models/TaskModelState";
import { initialState } from "./initialTaskState";
import type { TaskActionType } from "./taskActions";

type TaskContextProps = {
  task: TaskModelState,
  dispatch: React.ActionDispatch<[action: TaskActionType]>
};

const initialTaskContext = {
  task: initialState,
  dispatch: () => {}
};

export const TaskContext = createContext<TaskContextProps>(initialTaskContext);

