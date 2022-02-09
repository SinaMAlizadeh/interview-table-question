import styled from 'styled-components';

export const Modal = styled.div`
position: fixed;
flex-direction: column;
width: 100%;
height: 100%;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #00000069;
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalContent = styled.div`
width : 500px;
background-color : #fff;
padding : 10px;
border-radius : 0.3rem;
`;

export const ModalHeader = styled.div`
  width : 100%;
  padding : 15px 0;
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h3`
  margin : 0;
  padding-left: 5px;
`;

export const ModalBody = styled.div`
  padding :10px 0;
  border-top : 1px solid #eee;
  border-button : 1px solid #eee;
  background-color : #fff;
  width : 100%; 
  display: flex;
  justify-content: center;
`;


export const CloseBtn = styled.span`
   color : #c9c9c9;
   cursor: pointer;
   padding-right: 5px;
`;
