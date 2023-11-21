import {TYPES} from "../actionTypes";
import TaskStorage from "../../helpers/TaskStorage/TaskStorage";

export const getTaskPage = (id) => {

    let tasksArr = null
    TaskStorage.getTaskItems().then(function (tasks) {
        tasksArr = tasks
        console.log('id from action', id)
        console.log('tasks from action', tasksArr)
    }, function () {
        console.log('Нет задач')
    })

    return {
        type: TYPES.GET_TASK_PAGE,
        payload: {
            projectId: id,
            taskItems: tasksArr,
        }
    }
}