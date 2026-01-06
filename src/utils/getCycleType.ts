import type {TaskModel} from "../models/TaskModel.ts";

export function getCycleType(currentCycle: number): TaskModel['type'] {
    if (currentCycle % 8 === 0 && currentCycle !== 0)
        return 'longBreakTime';
    else if (currentCycle % 2 === 0)
        return 'shortBreakTime';
    return 'workTime';
}