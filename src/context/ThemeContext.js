import React, { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  return (
    <ThemeContext.Provider value="json placeholder travesed data. {} Loading ... Please wait">
      {props.children}
    </ThemeContext.Provider>
  );
};
