import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const DartLightModeStyle = createGlobalStyle`
    body {
        background: ${(props) => props.bg};
        color: ${(props) => props.color};
    }
`;

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
    };
  }
   
    render() {
      const theme = {
        bg: this.state.mode ? 'white' : 'black',
        color: this.state.mode ? 'white' : 'white',
      };
        
        return (
          <div>
            <ThemeProvider theme={theme}>
              <DartLightModeStyle />

              <h1>Greenshop</h1>
              <button onClick={onClick}>
                {this.state.mode ? 'Dark Mode' : 'Light Mode'}
              </button>
            </ThemeProvider>
          </div>
        );
  }
}

export default Mode 