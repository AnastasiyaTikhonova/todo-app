import React, {useEffect} from "react";
import Projects from "../containers/Projects";
import {useDispatch} from "react-redux";
import Storage from "../helpers/Storage";
import {setProjectItems} from "../store/actions/projectAction";
import Tasks from "../containers/Tasks/Tasks";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        Storage.getProjectItems().then(function (projects) {
            if(projects.length){
                dispatch(setProjectItems(projects))
            }
        }, function () {
            console.log('Нет проектов')
        })

    }, [])

    return(
        <Projects />
        //<Tasks/>
    )
}

export default Main;