import React, { createContext, useContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [logged, setLogged] = React.useState(false);

  return (
    <StateContext.Provider value={{ logged, setLogged }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
