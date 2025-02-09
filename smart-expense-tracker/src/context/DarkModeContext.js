import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" // Retrieve previous state
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode); // Store dark mode state in localStorage
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div style={{ backgroundColor: darkMode ? "#1f2937" : "#ffffff", minHeight: "100vh" }}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};
