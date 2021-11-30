import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [statusModal, setStatusModal] = useState(false);
  const [animationType, setAnimationType] = React.useState("zoomIn");

  const handleCloseModal = () => {
    setStatusModal(false);
  };

  return (
    <StateContext.Provider
      value={{
        statusModal,
        animationType,
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
