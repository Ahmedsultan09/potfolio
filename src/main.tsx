import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const savedTheme = localStorage.getItem("theme");
const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
document.documentElement.classList.toggle("dark", theme === "dark");
document.documentElement.style.colorScheme = theme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
