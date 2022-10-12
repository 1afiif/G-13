import React, { useReducer } from 'react';
import { data } from '../data';
import { reducer } from './reducer';

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer,
    {
      mock: data,
      selected: 'name',
      Id: null,
      name: '',
      status: '',
    }
  );
  return (
    <div style={{ flex: 1 }}>
      <h1>UseReducer</h1>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) =>
          dispatch({
            type: 'search',
            payload: { inputVal: e.target.value },
       })}/>
      <select
        style={{ marginLeft: '10px' }}
        onChange={(e) =>
          dispatch({ type: 'select', payload: { selectVal: e.target.value } })
      }>
        <option value='id'>ID</option>
        <option value='name'>Name</option>
        <option value='status'>Status</option>
      </select>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {state.mock.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value?.id}</td>
                <td>
                  {state.Id === value.id ? (
                    <input
                      type={'text'}
                      value={state.name}
                      onChange={(e) =>
                      dispatch({
                      type: 'name',
                      payload: { nameEvent: e.target.value }})}/>
                  ) : (value?.name)}
                </td>
                <td>
                  {state.Id === value.id ? (
                    <input
                      type={'text'}
                      value={state.status}
                      onChange={(e) =>
                        dispatch({
                          type: 'status',
                          payload: { statusEvent: e.target.value }})}/>
                  ) : (
                    value?.status
                  )}
                </td>
                <td>
                  {state.Id === value.id ? (
                    <button onClick={() => dispatch({type: 'save'})}>Save</button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'edit',
                          payload: {
                          userId: value.id,
                          userName: value.name,
                          userStatus: value.status,
                          }})}>Edit</button>
            )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'delete',
                        payload: { userId: value?.id }})}>
                    Delete</button>
                </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UseReducer;
