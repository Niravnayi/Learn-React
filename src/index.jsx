import React from "react";
import { createRoot } from 'react-dom/client';
import "./style.css";
import Todo from "./Todo";
import Weather from "./wether";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));




root.render(

    // <Todo />
    <Weather/>

);