import {TYPES} from "../actionTypes";
import Storage from "../../helpers/Storage";

export const getTasks = (id) => {
     let tasksArr = null
    Storage.getStore().then(function (storeItems) {
        const item = storeItems.filter((storeItem) => storeItem.id == id)
        tasksArr = item[0].tasks
    }, function () {
        console.log('Нет задач')
    })

    return {
        type: TYPES.GET_TASK_PAGE,
        payload: {
            isTaskPage: true,
            projectId: id,
            taskItems: [tasksArr]
        }
    }
}

export const getProjectPage = () => {
    return{
        type: TYPES.GET_PROJECT_PAGE,
        payload: {
            isTaskPage: false,
            projectId: null,
        }
    }
}