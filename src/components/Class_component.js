import React, { Component } from 'react'

export default class Class_component extends Component {
    constructor(){
        super();
        this.str="Good Morning";
    }
  render() {
    return (
      <div>
        <h1>{this.str}</h1>
      </div>
    )
  }
}
