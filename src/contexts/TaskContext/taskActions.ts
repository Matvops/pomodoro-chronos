import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK'
};


export type TaskActionType = {
    type: TaskActionTypes.START_TASK,
    payload: TaskModel
} | {
    type: TaskActionTypes.INTERRUPT_TASK,
} | {
    type: TaskActionTypes.COUNT_DOWN,
    payload: { secondsRemaining: number }
} | {
    type: TaskActionTypes.COMPLETE_TASK
}