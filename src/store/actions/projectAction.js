import { TYPES } from "../actionTypes";
import { nanoid } from "nanoid";
import Storage from "../../helpers/Storage";

export const setProjectItems = (items) => { //выводит список всех проектов
    return{
        type: TYPES.SET_PROJECT_ITEMS,
        payload: {
            items,
        },
    }
}

export const addProjectItem = (projectTitle) => { // добавляет проект
    const id = nanoid()
    const tasks = []
    Storage.addProjectItem({id, projectTitle, tasks})
    return{
        type: TYPES.ADD_PROJECT_ITEM,
        payload: {
            id, projectTitle, tasks
        },
    }
}

export const deleteProjectItem = (id) => {  //  удаляет проект
    Storage.deleteProjectItem(id)
    return{
        type: TYPES.DELETE_PROJECT_ITEM,
        payload: {
            id,
        },
    }
}
