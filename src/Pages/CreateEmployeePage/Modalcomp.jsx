import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';



 function MyModal( { open=true, containerObject, messageObject, buttonObject, modalMessage, buttonMessage}){
    const [isOpen, setIsOpen]=useState(open);

useEffect(()=>{setIsOpen(open)},[open]);
    const ModalContainer=styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    color: black;
    top:50%;
    transform: translate(-50%,-50%);
    left: 50%;
    background-color:lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border:solid black;

    ${containerObject}
    `;
   const Modal=styled.div`
   display:flex;
   justify-content:center;
   ${messageObject}
  
   `
    const ModalButton=styled.button`
    display:flex;
    justify-content:center;

    width:30%;
    hight:auto;
     ${buttonObject}
    `
  


    function closeModal(){
        setIsOpen(false)

    }
    
    return(
     
        <ModalContainer className="modalContainer"  style={isOpen?{display:'flex'}:{display:'none'}}>
                {console.log(isOpen)}
            <Modal className="modalMessage">
                {modalMessage? modalMessage:'operation validée'}

            </Modal>
            <ModalButton onClick={closeModal} className='modalButton'> {buttonMessage?buttonMessage:'ok'}</ModalButton>
        </ModalContainer>

    )
}
export default MyModal
