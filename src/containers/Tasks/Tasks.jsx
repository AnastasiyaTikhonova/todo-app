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
                <form className='form'>
                    <label htmlFor="title">Заголовок</label>
                    <input id="title"/>
                    <label htmlFor="description">Описание</label>
                    <textarea id="description"/>

                    <p>Приоритет</p>


                    <input id="priority" type="checkbox" value="yes"/>
                    <label id="priorityLabel">Важно</label>




                </form>
            </Modal>
        </div>
    )
}

export default Tasks;