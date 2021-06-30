import React, { useState, createContext } from "react";

// Create Context Object
export const SelectedContext = createContext();

// Create a provider for components to consume and subscribe to changes

export const SelectedContextProvider = (props) => {
  const [isAllSelected, setIsAllSelected] = useState(0);

  return (
    <SelectedContext.Provider value={[isAllSelected, setIsAllSelected]}>
      {props.children}
    </SelectedContext.Provider>
  );
};
