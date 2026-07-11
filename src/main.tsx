import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply theme immediately to prevent flash of wrong theme (dark is default)
const savedTheme = localStorage.getItem("theme");
const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
document.documentElement.classList.toggle("dark", theme === "dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
