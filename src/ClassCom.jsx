import React, { Component } from 'react'

export default class ClassCom extends Component {

  //state 
  constructor(props){
    super(props);
    this.state={
      count: 0,
    }
  }
  //change state
  incrementCount=()=>{
    this.setState((preveState)=>({
      count:preveState.count+1
    }))
  }

  render() {
    const {props,props2}=this.props
    return (
      <div>
        <center>
            <h1>Class Component Props </h1>      
            <h1>{props}</h1>
            <h1>{props2}</h1>

            <br />
            <h1>class component State</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.incrementCount}>Increment</button>
        </center>
      </div>
    )
  }
}
