import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increamentCount=()=>{
        this.setState({count: this.state.count+5})
    }
    decrementCount=()=>{
        this.setState({count: this.state.count-5})
    }
    multCount=()=>{
        this.setState({count: this.state.count*5})
    }
    divCount=()=>{
        this.setState({count: this.state.count/5})
    }
    
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increamentCount}>Increment</button><br>
        </br><br></br>
        <button onClick={this.decrementCount}>Decrement</button><br>
        </br><br></br>
      
        <button onClick={this.multCount}>Multiple</button><br>
        </br><br></br>
        <button onClick={this.divCount}>Division</button>
      </div>
    )
  }
}
