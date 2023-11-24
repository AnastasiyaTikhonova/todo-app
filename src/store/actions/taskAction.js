import {TYPES} from "../actionTypes";
import TaskStorage from "../../helpers/TaskStorage/TaskStorage";

export const getTaskPage = (id) => {
    let tasksArr = null
    let db = new TaskStorage(id)

    db.getTaskItems(id).then(function (tasks) {
        tasksArr = tasks
        console.log(tasksArr)
    }, function () {
        console.log('Запрос не выполнен')
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