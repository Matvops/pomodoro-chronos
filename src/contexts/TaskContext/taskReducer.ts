import type { TaskModelState } from "../../models/TaskModelState";
import { TaskActionTypes, type TaskActionType } from "./taskActions";

export function taskReducer(state: TaskModelState, action: TaskActionType) {

    switch(action.type) {
        case TaskActionTypes.START_TASK: {
            console.log(action.type);
            console.log(action.payload)
            break;
        } 
        case TaskActionTypes.INTERRUPT_TASK: {
            console.log(action.type);
            console.log(action.payload);
            break;
        }
        case TaskActionTypes.RESET: {
            console.log(action.type);
            break;
        }
    }

    return state;
}