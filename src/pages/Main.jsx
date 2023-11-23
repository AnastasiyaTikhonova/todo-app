import React, { useEffect } from "react";
import Projects from "../containers/Projects";
import {useDispatch, useSelector} from "react-redux";
import ProjectStorage from "../helpers/ProjectStorage/ProjectStorage";
import {setProjectItems} from "../store/actions/projectAction";
import Tasks from "../containers/Tasks/Tasks";
import {getIsTaskPage, getProjectId} from "../store/selectors";
import {getTaskPage} from "../store/actions/taskAction";

const Main = () => {
    const dispatch = useDispatch()
    const isTaskPage = useSelector(getIsTaskPage)
    const projectId = useSelector(getProjectId)

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
        if(isTaskPage){
            dispatch(getTaskPage(projectId))
        }
    }, [])

    return isTaskPage ? <Tasks/> : <Projects />
}

export default Main;
