import React, { Component } from 'react'
import { Container } from '../Button/style.js'

export class Button extends Component {
  render() {
    return (
        <Container
            width={this.props.width}
            color={this.props.color}
            bg={this.props.bg}
            >{this.props.children}
      </Container>
    )
  }
}

export default Button

