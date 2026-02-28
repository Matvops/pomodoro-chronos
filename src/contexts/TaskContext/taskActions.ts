import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET = 'RESET'
};


export type TaskActionType = {
    type: TaskActionTypes.START_TASK,
    payload: TaskModel
} | {
    type: TaskActionTypes.INTERRUPT_TASK,
    payload: TaskModel
} | {
    type: TaskActionTypes.RESET
}