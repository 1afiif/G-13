import React, { Component } from 'react'
import Data from '../data.js';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: Data,
      name:'',
      userName:''
    }
  }
  render() {
    const editFunct = (id,name,userName) => {
      this.setState({
        mockData: this.state.mockData.map((value) => ({
          id: value.id,
          name: value.name,
          userName: value.userName,
          hidden:value.id === id ? true : false
        }))
      })
      this.setState({
        name: name,
        userName:userName
      })
    }

    const onSave = (id) => {
      this.setState({
        mockData: this.state.mockData.map((value) => ({
          id: value.id,
          name: value.id === id ? this.state.name : value.name,
          userName:value.id === id ? this.state.userName : value.userName,
          hidden: false
       }))
     })
    }
    
    return (
    <div>
    <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>userName</th>
    <th>Action</th>
    </tr>           
    </thead>
    <tbody>
       {
         this.state.mockData.map((value) => (
         <tr key={value.id}>
         <td>{value.id}</td>
             <td>
               {
                 value.hidden ? <input type={'text'} value={this.state.name} onChange={(e) => this.setState({name:e.target?.value})} /> : <h3>{value.name}</h3>
               }
             </td>
             <td>
               {
                 value.hidden ? <input type={'text'} value={this.state.userName} onChange={(e) => this.setState({userName:e.target?.value})} /> : <h3>{value.userName}</h3>
               }
             </td>
             <td>
               {
               value.hidden ? <button onClick={() => onSave(value.id)}>Save</button> : <button onClick={() => editFunct(value.id,value.name,value.userName)}>Edit</button>
               }
             </td>
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
