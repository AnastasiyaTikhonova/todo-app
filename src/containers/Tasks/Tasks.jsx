import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskDescription from "../../components/TaskDescription";
import TaskList from "../../components/TaskList";
import './Tasks.scss';

const Tasks = () => {
    return(
        <div className="taskPage">
            <Header/>
            <div className="taskContainer">
                <TaskDescription/>
                <TaskList/>
            </div>
            <Footer/>
        </div>
    )
}

export default Tasks;