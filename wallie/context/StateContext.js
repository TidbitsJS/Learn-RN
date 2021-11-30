import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [animationType, setAnimationType] = React.useState("zoomIn");

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <StateContext.Provider
      value={{
        modalState,
        animationType,
        setModalState,
        setAnimationType,
        handleCloseModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
