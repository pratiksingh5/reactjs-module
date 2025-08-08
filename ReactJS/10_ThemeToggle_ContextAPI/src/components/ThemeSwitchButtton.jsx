import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitchButtton = () => {
  const { theme, handleDarkTheme, handleLightTheme} = useContext(ThemeContext);
  
  const handleToggleTheme = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      handleLightTheme();
    } else {
      handleDarkTheme();
    }
  };

  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        onChange={handleToggleTheme}
      />
      <div class="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600 transition-all duration-300"></div>
      <div class="absolute left-1 top-1 w-6 h-6 bg-white border border-gray-300 rounded-full transition-all duration-300 peer-checked:translate-x-6 dark:border-gray-600"></div>
    </label>
  );
};

export default ThemeSwitchButtton;
