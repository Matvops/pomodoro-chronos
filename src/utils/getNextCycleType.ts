import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(nextCycle: number): TaskModel['type']
{

    let type: TaskModel['type'];

    if(nextCycle === 8) type = 'rest';
    else if(nextCycle % 2 === 0) type = 'shortRest';
    else type = 'work';

    return type;
}