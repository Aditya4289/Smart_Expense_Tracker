import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

const Dashboard = () => {
  const { expenses } = useContext(ExpenseContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (dateRange.start && dateRange.end) {
      setFilteredExpenses(
        expenses.filter(
          (expense) =>
            new Date(expense.date) >= new Date(dateRange.start) &&
            new Date(expense.date) <= new Date(dateRange.end)
        )
      );
    } else {
      setFilteredExpenses(expenses);
    }
  }, [dateRange, expenses]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Group expenses by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Convert to Pie Chart data format
  const chartData = Object.keys(categoryTotals).map((key) => ({
    name: key,
    value: categoryTotals[key],
  }));

  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1f2937" : "#f3f4f6",
        color: darkMode ? "#ffffff" : "#1f2937",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        Expense Dashboard
      </h2>

      {/* Date Range Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) =>
            setDateRange({ ...dateRange, start: e.target.value })
          }
          style={{
            padding: "12px",
            border: darkMode ? "1px solid #ccc" : "1px solid #888",
            borderRadius: "8px",
            backgroundColor: darkMode ? "#374151" : "#fff",
            color: darkMode ? "#ffffff" : "#000",
            outline: "none",
          }}
        />
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          style={{
            padding: "12px",
            border: darkMode ? "1px solid #ccc" : "1px solid #888",
            borderRadius: "8px",
            backgroundColor: darkMode ? "#374151" : "#fff",
            color: darkMode ? "#ffffff" : "#000",
            outline: "none",
          }}
        />
      </div>

      {/* Expenses Table */}
      <div
        style={{
          overflowX: "auto",
          backgroundColor: darkMode ? "#374151" : "#ffffff",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: darkMode ? "#4f46e5" : "#3b82f6", color: "#ffffff" }}>
            <tr>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Date</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Category</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Amount</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr
                key={index}
                style={{
                  textAlign: "center",
                  border: "1px solid #ddd",
                  backgroundColor: darkMode
                    ? index % 2 === 0
                      ? "#1f2937"
                      : "#374151"
                    : index % 2 === 0
                    ? "#f9fafb"
                    : "white",
                }}
              >
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{expense.date}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{expense.category}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd", color: "#10b981", fontWeight: "600" }}>
                  ${expense.amount}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Category Summary Chart */}
      <div style={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: darkMode ? "#374151" : "#ffffff",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Expense Breakdown
          </h3>
          <ResponsiveContainer width={400} height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 24px",
          backgroundColor: darkMode ? "#4f46e5" : "#3b82f6",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background 0.3s",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Dashboard;
