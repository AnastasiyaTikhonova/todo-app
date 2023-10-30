import { TYPES} from "../actionTypes";

const defaultState = []

export const taskReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case TYPES.ADD_TASK:
            return {
                ...state,
                taskTitle: payload.taskTitle

            }

        default: return state
    }
}