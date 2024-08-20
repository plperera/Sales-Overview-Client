import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {isModalOpen && (
        <Modal>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div>
        {children}
      </div>
    </ModalOverlay>,
    document.body
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

