import React, {useEffect, useState} from "react";
import Projects from "../containers/Projects";
import {useDispatch, useSelector} from "react-redux";
import ProjectStorage from "../helpers/ProjectStorage/ProjectStorage";
import TaskStorage from "../helpers/TaskStorage/TaskStorage";
import {setProjectItems} from "../store/actions/projectAction";
import Tasks from "../containers/Tasks/Tasks";
import {getIsTaskPage, getProjectId} from "../store/selectors";
import {getTaskPage} from "../store/actions/taskAction";

const Main = () => {
    const dispatch = useDispatch()
    const isTaskPage = useSelector(getIsTaskPage)
    const projectId = useSelector(getProjectId)

    console.log('isTaskPage', isTaskPage)

    useEffect(() => {
        ProjectStorage.getProjectItems().then(function (projects) {
            if(projects.length){
                dispatch(setProjectItems(projects))
            }
        }, function () {
            console.log('Нет проектов')
        })

    }, [])

    useEffect(() => {

            TaskStorage.getTaskItems().then(function (tasks) {
                if(tasks){
                    dispatch(getTaskPage(projectId))
                }
            }, function () {
                console.log('Нет задач')
            })

    }, [])

    return isTaskPage ? <Tasks/> : <Projects />
}

export default Main;
