import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            count:0
        }
    }
    render() {
        const setValue = e => {
        const { value } = e.target
        this.setState({name:value})
    }
    
        const increment = () => {
            this.setState({ count: this.state.count + 1 });
        }

        const decrement = () => {
          if(this.state.count > 0)
          this.setState({ count: this.state.count - 1 });
        };
    return (
      <div style={{display:'flex', flexDirection:'column', width:'200px', gap:'2em', margin:'1em 2em'}}>
        <h1>{this.props.title} Component</h1>
        <input type="text" value={this.state.name} onChange={setValue}/>
        <h3>Name: {this.state.name}</h3>
            <button onClick={increment}>+</button>
            <h4>Count:{this.state.count}</h4>
            <button onClick={decrement}>-</button>
      </div>
    )
  }
}

export default ClassComponent