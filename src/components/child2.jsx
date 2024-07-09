 import React, { PureComponent } from 'react'
 import shallowCompare from 'react-addons-shallow-compare'; // ES6

 
 export default class Child2 extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) { 
    //     return shallowCompare(this,nextProps,nextState)
    //  }
   render() {
    const {count} = this.props;

     return (
       <div>
        <p>Child2</p>
        <p>{`count: ${count}`}</p>
       </div>
     )
   }
 }
 