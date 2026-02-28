import type { TaskModelState } from "../../models/TaskModelState";
import { getNextCycle } from "../../utils/getNextCycle";
import { parseSecondsToMinutes } from "../../utils/parseSecondsToMinutes";
import { TaskActionTypes, type TaskActionType } from "./taskActions";

export function taskReducer(state: TaskModelState, action: TaskActionType) {

    switch(action.type) {
        case TaskActionTypes.START_TASK: {
            
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);

            state = {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining: newTask.durationInMinutes * 60,
                formattedSecondsRemaining: parseSecondsToMinutes(newTask.durationInMinutes * 60),
                tasks: [...state.tasks, newTask]
            };

            break;
        } 
        case TaskActionTypes.INTERRUPT_TASK: {

            state = {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map(task => {

                    if(task.id === state.activeTask?.id) {
                        task = {...task, interruptDate: Date.now()};
                    } 

                    return task;
                })
            }

            break;
        }
    }

    return state;
}