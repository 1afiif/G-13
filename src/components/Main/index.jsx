import React, { Component } from 'react'
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import { Container } from './style'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page:'login'
        }
    }

    render() {
        const changePage = (page) => {
          this.setState({page:page})
        }
        
    return (
        <Container>
            {this.state.page === 'login' ? <LoginPage changePage={changePage} /> : <RegisterPage changePage={changePage} />}
      </Container>
    )
  }
}

export default Main