import React, { Component } from 'react'
import Data from '../data.js';

class Index extends Component {
  constructor(props) {
  super(props);
  this.state = {
    fruits:Data,
  }  
  }
  render() {
    return (
    <div>
    <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    </tr>           
    </thead>
    <tbody>
        {
        this.state.fruits.map((value) => (
         <tr>
           <th>{value.id}</th>         
           <th>{value.name}</th>         
         </tr>
            ))
        }
    </tbody>
    </table>    
    </div>
    )
  }
}

export default Index
