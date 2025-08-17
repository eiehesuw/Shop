import { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import "./ModalComponent.scss"

Modal.setAppElement('#root');

const customStylesDefault = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};

const ModalComponent = ({ children, isOpen = null, closeHandler = null }) => {
    const [modalIsOpen, setIsOpen] = useState(isOpen !== null ? isOpen : false);

    const nodeRef = useRef();

    useEffect(() => {
        if (typeof isOpen !== null) {
            if (isOpen === false) {
                closeModal();
            }
            if (isOpen === true) {
                openModal();
            }
        }
    }, [isOpen])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        if (closeHandler) {
            setIsOpen(false);
            closeHandler();
        };
    }

    return (
        <div className="modal">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStylesDefault}
                shouldCloseOnOverlayClick={true}
            >
                <div className="modal__inner" ref={nodeRef}>
                    <button className="modal__close" onClick={closeModal}></button>
                    {children}
                </div>
            </Modal>
        </div>
    );
};

export default ModalComponent;
