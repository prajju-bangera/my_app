import React, { Component } from 'react'

export default class Class_component extends Component {
  render() {
    return (
      <div>
        <h1>Good Morning {this.props.name}</h1>
      </div>
    )
  }
}
