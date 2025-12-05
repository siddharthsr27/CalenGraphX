import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; 
import App from "./App";
import "./styles.css";
const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
