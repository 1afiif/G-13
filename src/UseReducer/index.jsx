import React, { useReducer } from 'react';
import { data } from '../data';

const UseReducer = () => {
  //2video 27minut  
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        //Delete case
        case 'delete':
          let result = state.mock.filter(
            (value) => value.id !== action.payload.userId
          );
          return { ...state, mock: result };
        //Search case
        case 'search':
          let searchUser = data?.filter((value) => value?.status?.toLowerCase()?.includes(action?.payload?.eventVal));
          return {...state, mock:searchUser}
        default:
          return state.mock;
      }
    },
    {
      mock: data,
    }
  );
  return (
    <div style={{ flex: 1 }}>
      <h1>UseReducer</h1>
      <input type="text"
        placeholder='Search...'
        onChange={(e) =>
          dispatch({
            type: 'search',
            payload: { eventVal: e.target.value }
          })} />
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
                <td>{value?.name}</td>
                <td>{value?.status}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'delete',
                        payload: { userId: value?.id },
                      })
                    }
                  >
                    Delete
                  </button>
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
