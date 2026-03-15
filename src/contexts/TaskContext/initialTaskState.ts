import type { TaskModelState } from "../../models/TaskModelState";

export const initialState: TaskModelState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    work: 1,
    rest: 1,
    shortRest: 1
  }
};