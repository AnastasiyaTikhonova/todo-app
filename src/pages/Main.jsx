import React, { useEffect } from "react";
import Projects from "../containers/Projects";
import {useDispatch, useSelector} from "react-redux";
import Storage from "../helpers/Storage";
import {setProjectItems} from "../store/actions/projectAction";
import Tasks from "../containers/Tasks/Tasks";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        Storage.getStore().then(function (projects) {
            if(projects.length){
                dispatch(setProjectItems(projects))
            }
        }, function () {
            console.log('Нет проектов')
        })

    }, [])

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route path="/tasks/:id" element={<Tasks />} />
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </Router>
        )
}

export default Main;
