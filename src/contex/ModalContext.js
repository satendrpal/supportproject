// src/contexts/ModalContext.js
import React, { createContext, useContext, useState } from 'react';
import GlobalModal from './GlobalModal';

import '../style/style.css';
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({
    show: false,
    title: '',
    data: [],
  });

  const showModal = ({ title, data,inputId,condition }) => {
    setModalData({ show: true, title, data,inputId,condition });
  };

  const hideModal = () => {
    setModalData({ ...modalData, show: false });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <GlobalModal
        show={modalData.show}
        title={modalData.title}
        data={modalData.data}
         inputId={modalData.inputId}
        condition={modalData.condition}
        onClose={hideModal}
      />
    </ModalContext.Provider>
  );
};
