import React from "react";
import { styled } from "styled-components";

export const Modal = ({ onClose }) => {
  return (
    <ModalContainer>
      <h1>Ассаламу Алейкум</h1>
      <button onClick={onClose}>Уалейкум Ассалам</button>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 15vh;
  left: 5%;
  background-color: green;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);
  color: white;
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  button{
    background-color: white;
    width: 150px;
    height: 35px;
    border: 0;
    border-radius: 10px;
    margin-top: 10px;
  }
`;
