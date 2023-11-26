import { TYPES } from "../actionTypes";

const defaultState = {
    isTaskPage: false,
    projectId: null,
    taskItems: [    {title: 'jk,mfnhdjdlf', description: "wdbhrtjeiod", currStatus: 'queue',},
                    {title: 'ffffeeeeeee', description: "whsrthtrbbsod", currStatus: 'development',},
                    {title: 'jhhhhhh', description: "wbndtyrsiod", currStatus: 'done',},
                    {title: 'jqqqqqqqf', description: "wadn gfbbvod", currStatus: 'development',},
                    {title: 'vvvvvv', description: "d  fsbg", currStatus: 'done',},
                    {title: 'jk,mfnhdjdlf', description: "wdbhrtjeiod", currStatus: 'done',},
            ]
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
                isTaskPage: payload.isTaskPage,
                projectId: payload.projectId,
                taskItems: payload.taskItems,

            }
        case TYPES.GET_PROJECT_PAGE:
            return {
                ...state,
                isTaskPage: payload.isTaskPage,
                projectId: payload.projectId
            }

        default: return state
    }
}