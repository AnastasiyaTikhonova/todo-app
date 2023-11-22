import { TYPES } from "../actionTypes";

const defaultState = {
    isTaskPage: false,
    projectId: null,
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
                taskItems: payload.taskItems

            }
        case TYPES.GET_TASK_PAGE:
            return {
                ...state,
                isTaskPage: true,
                projectId: payload.projectId,
                taskItems: payload.taskItems,

            }

        default: return state
    }
}