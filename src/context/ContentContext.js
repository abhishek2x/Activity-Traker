import React, { useState, createContext } from "react";
import { DefaultData } from "../utils/dropdown-data.js";

// Create Context Object
export const ContentContext = createContext();

// Create a provider for components to consume and subscribe to changes

export const ContentContextProvider = (props) => {
  const [data, setData] = useState(DefaultData);

  return (
    <ContentContext.Provider value={[data, setData]}>
      {props.children}
    </ContentContext.Provider>
  );
};
