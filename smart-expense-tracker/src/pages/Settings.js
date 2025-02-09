import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext"; // ✅ Correct import

const Settings = () => {
  const { expenses } = useContext(ExpenseContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerStyle = {
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: darkMode ? "#1f2937" : "#ffffff",
    color: darkMode ? "#f3f4f6" : "#1f2937",
    textAlign: "center",
    minHeight: "100vh",
  };

  const buttonStyle = {
    padding: "12px 24px",
    marginTop: "20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#f59e0b" : "#3b82f6",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Settings</h2>
      <p style={{ fontSize: "18px" }}>Total Expenses: {expenses.length}</p>
      <button style={buttonStyle} onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Settings;
