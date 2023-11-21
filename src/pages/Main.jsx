import React, {useEffect, useState} from "react";
import Projects from "../containers/Projects";
import {useDispatch, useSelector} from "react-redux";
import Storage from "../helpers/ProjectStorage/ProjectStorage";
import {setProjectItems} from "../store/actions/projectAction";
import Tasks from "../containers/Tasks/Tasks";
import {getTaskId } from "../store/selectors";
import {getTaskPage} from "../store/actions/taskAction";

const Main = () => {
    const dispatch = useDispatch()
    const taskId = useSelector(getTaskId)

    console.log('taskId', taskId)

    useEffect(() => {
        Storage.getProjectItems().then(function (projects) {
            if(projects.length){
                dispatch(setProjectItems(projects))
            }
        }, function () {
            console.log('Нет проектов')
        })

    }, [])

    useEffect(() => {
        if(taskId) {
            console.log('taskId', taskId)
            dispatch(getTaskPage(taskId))
        }
    }, [])



    return taskId ? <Tasks/> : <Projects />

}

export default Main;