import { TYPES } from "../actionTypes";

export const setProjectItems = (items) => {
    return{
        type: TYPES.SET_PROJECT_ITEMS,
        payload: {
            items,
        },
    }
}

// export const addProjectItem = (item) => (dispatch, getState) => {
//     const currProjectItems = getState().projectReducer.projectItems
//    console.log(currProjectItems)
//
// }