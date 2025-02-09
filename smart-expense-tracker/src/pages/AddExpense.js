import React, { useState, useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [expense, setExpense] = useState({
    date: "",
    category: "",
    amount: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1a202c" : "#ffffff";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Health",
    "Entertainment",
    "Other",
  ];

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expense.date || !expense.category || !expense.amount || !expense.description) {
      setError("All fields are required!");
      return;
    }

    if (isNaN(expense.amount) || expense.amount <= 0) {
      setError("Amount must be a valid positive number.");
      return;
    }

    addExpense({ ...expense, amount: parseFloat(expense.amount) });
    setExpense({ date: "", category: "", amount: "", description: "" });
  };

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: darkMode ? "#2d3748" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "20px", marginBottom: "16px" }}>
        Add New Expense
      </h2>

      {error && <p style={{ color: "red", textAlign: "center", marginBottom: "8px" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Date Input */}
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: darkMode ? "#4a5568" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Category</label>
          <select
            name="category"
            value={expense.category}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: darkMode ? "#4a5568" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Input */}
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Amount ($)</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: darkMode ? "#4a5568" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Description</label>
          <textarea
            name="description"
            value={expense.description}
            onChange={handleChange}
            placeholder="Enter description"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: darkMode ? "#4a5568" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#4299e1",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Expense
        </button>
      </form>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: darkMode ? "#facc15" : "#1a202c",
          color: darkMode ? "#000000" : "#ffffff",
          padding: "10px 15px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default AddExpense;
