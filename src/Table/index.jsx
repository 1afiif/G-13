import React from 'react';
import {
  Container,
  InputWrapper,
  Search,
  Title,
  Selection,
  DataWrapper,
  TableContent,
  AddWrapper,
  AddBtn,
  Button,
  Trash
} from './style';
import Data from '../data.js';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: Data,
      search: '',
      select: '',
      name: '',
    };
  }
  render() {
    const onSearch = ({ target }) => {
      let result = Data.filter((item) =>
        item[this.state.select]
          .toString()
          .toLowerCase()
          .includes(target?.value.toLowerCase())
      );
      this.setState({ language: result });
    };

    const onSelect = ({ target }) => {
      this.setState({ select: target?.value });
    };

    const onEnter = ({ target }) => {
      this.setState({ name: target?.value });
    };

    const onAdd = () => {
      const newUser = {
        id: this.state.language.length + 1,
        name: this.state.name,
      };
      this.setState({ language: [...this.state.language, newUser], name: '' });
    };

      const onDelete = (id) => {
          let result = this.state.language.filter((value) => value.id !== id);
          this.setState({ language: result });
    }
    return (
      <Container>
        <Title>React JS</Title>
        <InputWrapper>
          <Search type='text' placeholder='Search...' onChange={onSearch} />
          <Selection onChange={onSelect}>
            <option value='id'>ID</option>
            <option value='name'>Name</option>
          </Selection>
        </InputWrapper>
        <DataWrapper>
          <TableContent border={1}>
            <tbody>
              {
              this.state.language.length ? ( 
              this.state.language.map(({ id, name }) => {
                return (
                  <tr
                    key={id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '50px',
                      border: '1px solid black',
                    }}
                  >
                    <td style={{ flex: '1', width: '40px' }}>{id}</td>
                    <td style={{ flex: '6' }}>{name}</td>
                    <td style={{ flex: '2', width: '80px' }}>
                      <Button onClick={() => onDelete(id)}><Trash/></Button>
                    </td>
                    <td>
                      <Button>Edit</Button>
                    </td>
                  </tr>
                );
              })
              ) : <h4>No Data Found</h4>
            }
            </tbody>
          </TableContent>
        </DataWrapper>
        <AddWrapper>
          <Search
            value={this.state.name}
            placeholder='Enter title'
            type='text'
            onChange={onEnter}
          />
          <AddBtn onClick={onAdd}>Add</AddBtn>
        </AddWrapper>
      </Container>
    );
  }
}
export default Table;
