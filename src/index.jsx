import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import LifeCyle from "./LifeCycle";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const test = "hello";

LifeCyle.getDerivedStateFromProps = (props, state) => {
  console.log("getDerivedStateFromProps Life Cycle");
  return {
    name: `Mr. ${props.name}`,
    test,
  };
};

export default class App extends Component {
  state = {
    name: "rohit",
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <LifeCyle name={name} />
        <button
          type="button"
          onClick={() => {
            this.setState({ name: "Virat" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

root.render(<App />);
