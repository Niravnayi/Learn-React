import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";
import "./style.css";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

root.render(<Todo />);
