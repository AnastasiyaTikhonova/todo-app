import { TYPES } from "../actionTypes";
import { nanoid } from "nanoid";
import ProjectDB from "../../helpers/ProjectStorage/ProjectStorage";
import TaskStorage from "../../helpers/TaskStorage/TaskStorage";

export const setProjectItems = (items) => {
    return{
        type: TYPES.SET_PROJECT_ITEMS,
        payload: {
            items,
        },
    }
}

export const addProjectItem = (projectTitle) => {
    const id = nanoid()
    ProjectDB.addProjectItem({id, projectTitle})
    return{
        type: TYPES.SET_PROJECT_ITEM,
        payload: {
            id, projectTitle,
        },
    }
}

export const deleteProjectItem = (id) => {
    ProjectDB.deleteProjectItem(id)
    return{
        type: TYPES.DELETE_PROJECT_ITEM,
        payload: {
            id,
        },
    }
}
