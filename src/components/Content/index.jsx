import React from 'react'
import { Button, Container, Faceboo, Form, Googl, Icon, Input, LinkedIn, MainContainer, Title } from './style'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      pass:''
    }
  }
  render() {

    const emailVal = ({ target }) => {
      this.setState({ text: target?.value });
    }

    const passVal = ({ target }) => {
      this.setState({ pass: target?.value });
    }
    return (
      <MainContainer>
        <Container>
          <Title>SIGN UP</Title>
          <Form>
            <label htmlFor='signup' style={{ fontSize: '1.1em' }}>
              Email
            </label>
            <Input onChange={emailVal} type='text' value={this.state.text} />
          </Form>
          <Form>
            <label htmlFor='signup' style={{ fontSize: '1.1em' }}>
              Password
            </label>
            <Input onChange={passVal} type='password' value={this.state.pass} />
          </Form>
          <Button>SIGN UP</Button>
          <Icon>
            <Faceboo />
            <Googl />
            <LinkedIn />
          </Icon>
        </Container>
        <Container>
          <Title>LOGIN</Title>
          <Form>
            <label htmlFor='signup' style={{ fontSize: '1.1em' }}>
              Email
            </label>
            <Input onChange={emailVal} type='text' value={this.state.text} />
          </Form>
          <Form>
            <label htmlFor='signup' style={{ fontSize: '1.1em' }}>
              Password
            </label>
            <Input onChange={passVal} type='password' value={this.state.pass} />
          </Form>
          <Button>LOGIN</Button>
          <Icon>
            <Faceboo />
            <Googl />
            <LinkedIn />
          </Icon>
        </Container>
      </MainContainer>
    );
  }
}

export default Content
