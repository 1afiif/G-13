import React, { Component } from 'react'
import Data from '../data.js';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: Data,
      selected: {},
      name:''
    }
  }
  render() {
    const onEdit = (value) => {
      this.setState({ selected: value });
    }

    const onChange = (e) => {
      const { value } = e.target;
      this.setState({ name : value });
    }

    const onSave = () => {
      this.setState({ selected: this.state.name });
    }
    return (
    <div>
    <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Action</th>
    </tr>           
    </thead>
    <tbody>
       {
         this.state.fruits.map((value) => (
         <tr key={value.id}>
         <td>{value.id}</td>
         <td>
          {
          this.state.selected.id === value.id ? <input name='name' type="text" onChange={onChange} value={this.state.name}/> : value.name
          }
         </td>
         <td>
         {
          this.state.selected.id === value.id ? <button onClick={onSave}>Save</button> : <button onClick={() => onEdit(value)}>Edit</button> 
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
