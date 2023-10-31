import { TYPES } from "../actionTypes";

export const setProjectItems = (items) => {
    return{
        type: TYPES.SET_PROJECT_ITEMS,
        payload: {
            items,
        },
    }
}

export const addProjectItem = (id, projectTitle) => (dispatch, getState) => {

    const currProjectList = getState().projectReducer.projectItems
    const newProjectList = currProjectList.push({ id, projectTitle})
    dispatch(setProjectItems(newProjectList))
}