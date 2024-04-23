import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    //@ts-ignore
    super(props)
    this.state = { color: 'Black' }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'Yellow' })
    }, 1000)
  }
  render() {
    return (
      <div>
        <h2>I am a {this.state.color} Car!</h2>

        <button
          onClick={() => {
            this.setState({ color: 'Pink' })
          }}
        >
          CLick to change color
        </button>
      </div>
    )
  }
}
