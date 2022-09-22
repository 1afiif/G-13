import React, { Component } from 'react'
import Data from '../data.js';
//21:36minut
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
         <tr key={value.id}>
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
