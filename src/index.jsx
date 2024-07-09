import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Slider } from "./components/ui/slider";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const App =() => {
  return(
    <div>
      <Input type="email" placeholder="Email" />
  <Button variant="destructive">Hello world</Button>
  <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      
    />
  </div>
);
};
root.render(<App />);
