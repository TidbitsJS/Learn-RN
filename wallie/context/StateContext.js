import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [statusModal, setStatusModal] = useState(false);
  const [modalText, setModalText] = useState("Success");
  const [animationType, setAnimationType] = React.useState("zoomIn");

  const handleCloseModal = () => {
    setStatusModal(false);
  };

  return (
    <StateContext.Provider
      value={{
        statusModal,
        modalText,
        animationType,
        setModalText,
        setStatusModal,
        setAnimationType,
        handleCloseModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
