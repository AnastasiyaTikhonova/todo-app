import React, {useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskDescription from "../../components/TaskDescription";
import TaskList from "../../components/TaskList";
import './Tasks.scss';
import Modal from "../../components/Modal";

const Tasks = () => {
    const [modalActive, setModalActive] = useState(false)

    return(
        <div className="taskPage">
            <Header/>
            <div className="taskContainer">
                <div className="taskPage__row">
                    <TaskDescription/>
                    <TaskList getModalWindow={setModalActive}/>
                </div>

            </div>
            <Footer/>
            <Modal active={modalActive} setActive={setModalActive}>

            </Modal>
        </div>
    )
}

export default Tasks;