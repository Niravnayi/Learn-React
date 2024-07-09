import React, { Component } from "react";
import Child1 from "../components/child1";  
import Child2 from "../components/child2";

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
      count:0,
      number:0,
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
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      console.log(json);
      this.setState({ data: json });
    } catch (error) {}
    // console.log("componentDidMount Life Cycle");
    // console.log(document.getElementById("container"));
    // document.getElementById("container").style.color = "red";
    this.container.style.color = " red";
  }


  componentDidUpdate(prevProps, prevState) { 
    console.log(this.state);
  } 

  render() {
    const { name, data,count,number,firstName } = this.state;
    console.log("render Life Cycle");
    return (
      <div id="container" ref={(ref) =>{
        this.container  = ref;
      }}>
        <p>{name}</p>
        {data ? (
              data.map((products) => (
                <div key={products.id} className="product-item">
                  <p>Id: {products.id}</p>
                  <p>Title: {products.title}</p>
                  <p>Price: ${products.price}</p>
                  <p>Description: {products.description}</p>
                  {/* <img src={product.image} alt={product.title} /> */}
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
        <h1>{count}</h1>
        <h2>{number}</h2>
        <h3>{firstName}</h3>
        <button type="button" 
        onClick={() => {
          this.setState({
            count:5,
            number:10,
          });
        }}
        >
          click me
        </button>

        <Child1 />
        <Child2 />
      </div>
    );
  }
}
