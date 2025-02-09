import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use 'react-dom/client' in React 18
import App from "./App";
import { ExpenseProvider } from "./context/ExpenseContext"; // Ensure correct import

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18

root.render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>
);
