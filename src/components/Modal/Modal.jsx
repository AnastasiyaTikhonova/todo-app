import React from "react";
import './Modal.scss';
import {ModalClose} from "../../icons/ModalClose/ModalClose";

const Modal = ({ active, setActive, children }) => {
    return(
        <div className={active ? "modal active" : "modal"}>
            <div className="closeModalBtn" onClick={() => setActive(false)}>
                <ModalClose />
            </div>
            <div className={active ? "modal__content active" : "modal__content"}>
                {children}
            </div>
        </div>
    )
}

export default Modal;