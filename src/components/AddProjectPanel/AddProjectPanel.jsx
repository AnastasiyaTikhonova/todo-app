import React, {useState} from "react";
import './AddProjectPanel.scss'

const AddProjectPanel = ({ projectNameField }) => {

    const [inputName, setInputName ] = useState()

    const getInputName = (e) => {
        setInputName(e.target.value)
    }


    return(
        <div className="add-panel">
            <input className="add-panel__input" onChange={getInputName}/>
            <button className="add-panel__btn" onClick={projectNameField(inputName)}>Добавить проект</button>
        </div>
    )
}

export default AddProjectPanel;