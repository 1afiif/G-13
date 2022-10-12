import { data } from '../data';

export const reducer = (state, action) => {
  switch (action.type) {
    //Delete case
    case 'delete':
      let result = state.mock.filter(
        (value) => value.id !== action.payload.userId
      );
      return { ...state, mock: result };
    //Search case
    case 'search':
      let searchUser = data?.filter((value) =>
        value[state.selected]
          .toString()
          .toLowerCase()
          ?.includes(action?.payload?.inputVal)
      );
      return { ...state, mock: searchUser };
    // Select
    case 'select':
      return { ...state, selected: action.payload.selectVal };
    // Edit
    case 'edit':
      return {
        ...state,
        Id: action.payload.userId,
        name: action.payload.userName,
        status: action.payload.userStatus,
      };
    //Name
    case 'name':
      return { ...state, name: action.payload.nameEvent };
    //Status
    case 'status':
      return { ...state, status: action.payload.statusEvent };
    case 'save':
      let saveUser = state.mock.map((value) =>
        value.id === state.Id
          ? { ...value, name: state.name, status: state.status }
          : value);
      return { ...state, mock: saveUser, Id:null};
    default:
      return state.mock;
  }
};