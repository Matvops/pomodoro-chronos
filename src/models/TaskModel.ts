import type { TaskModelState } from "./TaskModelState";

export type TaskModel = {
    id: string,
    name: string,
    durationInMinutes: number,
    startDate: number,
    completeDate: number | null,
    interruptDate: number | null,
    type: keyof TaskModelState['config']
};