import React, { Component } from 'react'


export default class Test extends Component {
  state = {
    number: 0,
    
  };

  inc = () => {
    this.setState(({ number }, props) => {
      return { number: number + 1 }
    });
  }

  dec = () => {
    this.setState(({ number }, props) => {
      return { number: number - 1 }
    });
  }

  render() {
    return (
      <div className="flex gap-4 items-center">
        <button className="border p-4 text-xl rounded-md"
          onClick={this.inc}>

          {/* // this.setState((state) => {
            //     return {
            //         number: state.number + 1,
            //     }; 
            // })

            // this.setState({
            //     number:5,
            //     name: "Virat",
            // })

            // number = number + 1;
            // console.log(number); */}

          +</button>
        <p className="text-2xl">{this.state.number}</p>
        <button className="border p-4 text-xl rounded-md" onClick={this.dec}>-</button>
        
      </div>
    )
  }
}
