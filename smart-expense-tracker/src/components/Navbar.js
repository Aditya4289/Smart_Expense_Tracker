import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#2c3e50",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link
        to="/dashboard"
        style={{
          color: "#ecf0f1",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "8px 12px",
          borderRadius: "5px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#34495e")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Dashboard
      </Link>

      <span style={{ color: "#ecf0f1", fontSize: "18px" }}>|</span>

      <Link
        to="/add-expense"
        style={{
          color: "#ecf0f1",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "8px 12px",
          borderRadius: "5px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#34495e")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Add Expense
      </Link>

      <span style={{ color: "#ecf0f1", fontSize: "18px" }}>|</span>

      <Link
        to="/settings"
        style={{
          color: "#ecf0f1",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "8px 12px",
          borderRadius: "5px",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#34495e")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Settings
      </Link>
    </nav>
  );
};

export default Navbar;
