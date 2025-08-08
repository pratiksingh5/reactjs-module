import React, { useState, useEffect } from "react";
import ThemeSwitchButtton from "./components/ThemeSwitchButtton";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";


const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleLightTheme = () => {
    setTheme("light")
  }

  const handleDarkTheme = () => {
    setTheme("dark")
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{ theme, handleDarkTheme, handleLightTheme }}>
    <div className="h-screen bg-gray-100 dark:bg-slate-700 flex flex-col gap-10 justify-center items-center">
      <h1 className="font-bold text-4xl dark:text-white">Theme Toggler</h1>
      <ThemeSwitchButtton/>
      <Card />
    </div>
    </ThemeProvider>
  );
};

export default App;
