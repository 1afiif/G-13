import React, { Component } from 'react'
import { Container } from './style'

class Button extends Component {
  render() {
    return (
      <Container
      width={this.props.width}
      type={this.props.type}
      mt={this.props.mt}
        pb={this.props.pb}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Container>
    )
  }
}

export default Button
