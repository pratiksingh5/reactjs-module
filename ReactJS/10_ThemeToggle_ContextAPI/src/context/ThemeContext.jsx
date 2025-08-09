import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
});

// con

// 0. Context --> Central Data
// 1. Provider --> Jo data bhej rha hai
// 2, Consumer --> Jo data accept kar rha hai

// useState()

export const ThemeProvider = ThemeContext.Provider;

// function useMemo() {
//     return useContext(ThemeContext)
// }

//  const { theme, handleDarkTheme, handleLightTheme} = useContext(ThemeContext);

export function useTodo() {
  return useContext(ThemeContext);
}
