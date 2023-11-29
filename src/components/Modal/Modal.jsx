import React from "react";
import './Modal.scss';
import {ModalClose} from "../../icons/ModalClose/ModalClose";

const Modal = ({ active, setActive, children }) => {

    return(
        <div className={active ? "modal active" : "modal"}>
            <div className={active ? "modal__content active" : "modal__content"}>
                <div className="closeModalBtn" onClick={() => setActive(false)}>
                    <ModalClose />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;