import { TYPES } from "../actionTypes";
import { nanoid} from "nanoid";

export const setProjectItems = (items) => {
    return{
        type: TYPES.SET_PROJECT_ITEMS,
        payload: {
            items,
        },
    }
}

export const addProjectItem = (projectTitle) => {

    // const currProjectList = getState().projectReducer.projectItems
    // const newProjectList = [{ id, projectTitle}, ...currProjectList]
    // dispatch(setProjectItems(newProjectList))

    const id = nanoid()

    return{
        type: TYPES.DELETE_PROJECT_ITEM,
        payload: {
            id, projectTitle
        }
    }
}