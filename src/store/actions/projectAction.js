import { TYPES } from "../actionTypes";
import { nanoid } from "nanoid";
import Storage from "../../helpers/Storage";


export const setProjectItems = (items) => {
    // let projectList = []
    // Storage.getProjectItems().then(function (projects) {
    //     projects.forEach((project) => {
    //         projectList.push(project)
    //     })
    // }, function () {
    //     console.log('Нет проектов')
    // })
    return{
        type: TYPES.SET_PROJECT_ITEMS,
        payload: {
            items,
        },
    }
}

export const addProjectItem = (projectTitle) => {
    const id = nanoid()
    Storage.addProjectItem({id, projectTitle})
    return{
        type: TYPES.SET_PROJECT_ITEM,
        payload: {
            id, projectTitle,
        },
    }
}

export const deleteProjectItem = (id) => {
    Storage.deleteProjectItem(id)
    return{
        type: TYPES.DELETE_PROJECT_ITEM,
        payload: {
            id,
        },
    }
}