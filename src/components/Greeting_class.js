import React, { Component } from 'react'

export default class Greeting_class extends Component {
  render() {
    return (
      <div>
            <h1>Hello {this.props.name}</h1>
            <h1>Age: {this.props.age}</h1>
      </div>
    )
  }
}
