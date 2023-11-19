import { TYPES } from "../actionTypes";

const defaultState = {
    id,
    taskItems: [{
            taskId: 1,
            taskTitle: "Полить цветы",
            taskLevel: 1,
        },
        {
            taskId: 2,
            taskTitle: "Посадить цветы",
            taskLevel: 2,
        },
        {
            taskId: 3,
            taskTitle: "Пересадить цветы",
            taskLevel: 3,
        }],
}

export const taskReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case TYPES.ADD_TASK:
            return {
                ...state,
                taskTitle: payload.taskTitle

            }
        case TYPES.GET_TASKS:
            return {
                ...state,
                taskTitle: payload.taskItems

            }

        default: return state
    }
}