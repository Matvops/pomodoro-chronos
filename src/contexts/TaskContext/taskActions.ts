import type { TaskModelState } from "../../models/TaskModelState"

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET = 'RESET'
};


export type TaskActionType = {
    type: TaskActionTypes.START_TASK,
    payload: TaskModelState
} | {
    type: TaskActionTypes.INTERRUPT_TASK,
    payload: TaskModelState
} | {
    type: TaskActionTypes.RESET
}