import React, { useState } from 'react';
import styled from 'styled-components';

// Définir les composants Styled Components en dehors de la fonction de composant
const ModalContainer = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    color: black;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background-color: lightgrey;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid black;
`;

const Modal = styled.div`
    display: flex;
    justify-content: center;
`;

const ModalButton = styled.button`
    display: flex;
    justify-content: center;
    width: 30%;
    height: auto;
`;

function MyModal({ containerObject, messageObject, buttonObject, modalMessage, buttonMessage }) {
    const [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    return (<>
    {console.log(isOpen)}
        <ModalContainer className="modalContainer" isOpen={isOpen}>
            {console.log(isOpen)}
            <Modal className="modalMessage">
                {modalMessage ? modalMessage : 'operation validée'}
            </Modal>
            <ModalButton onClick={closeModal} className='modalButton'>
                {buttonMessage ? buttonMessage : 'ok'}
            </ModalButton>
        </ModalContainer>
        </>
    );
}

export default MyModal;
