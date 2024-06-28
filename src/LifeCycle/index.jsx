import React, { Component } from "react";

// Mounting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// Updating

// UnMount

// Error

export default class LifeCyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };

    // this.state = {
    //   name: `Mr. ${props.name}`,
    // };

    // APi call

    console.log("constructor Life Cycle");
    console.log(document.getElementById("container"));
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/1");
      const json = await res.json();
      console.log(json);
      this.setState({ data: json });
    } catch (error) {}
    // console.log("componentDidMount Life Cycle");
    // console.log(document.getElementById("container"));
    // document.getElementById("container").style.color = "red";
  }

  render() {
    const { name, data } = this.state;
    console.log("render Life Cycle");
    return (
      <div id="container">
        <p>{name}</p>
        {data && <p>{data.title}</p>}
      </div>
    );
  }
}
