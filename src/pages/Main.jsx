import React, { useEffect } from "react";
import Projects from "../containers/Projects";
import {useDispatch, useSelector} from "react-redux";
import Storage from "../helpers/Storage";
import {setProjectItems} from "../store/actions/projectAction";
import Tasks from "../containers/Tasks/Tasks";
import {getIsTaskPage, getProjectId} from "../store/selectors";
import {getTasks} from "../store/actions/taskAction";

const Main = () => {
    const dispatch = useDispatch()
    const isTaskPage = useSelector(getIsTaskPage)
    const projectId = useSelector(getProjectId)

    useEffect(() => {
        Storage.getStore().then(function (projects) {
            if(projects.length){
                dispatch(setProjectItems(projects))
            }
        }, function () {
            console.log('Нет проектов')
        })

    }, [])

    useEffect(() => {
        if (isTaskPage) {
            dispatch(getTasks(projectId))
        }
    }, [])

    return isTaskPage ? <Tasks/> : <Projects />
}

export default Main;
