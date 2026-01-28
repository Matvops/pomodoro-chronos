import type { TaskModel } from "./TaskModel"

export type TaskModelState = {
    tasks: TaskModel[],
    secondsRemaining: number,
    formattedSecondsRemaining: string,
    activeTask: TaskModel | null,
    currentCycle: number,
    config: {
        work: number,
        shortRest: number
        rest: number,
    };
};