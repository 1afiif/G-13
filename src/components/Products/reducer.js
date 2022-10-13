
export const reducer = (state, action) => {
  switch (action.type) {
    // Delete
    case 'delete':
      let result = state.mock.filter(
        (value) => value.id !== action.payload.userId
      );
      return { ...state, mock: result };
    case 'increment':
      let output = state.mock.map((value) =>
        value.id === action.payload.userId
          ? { ...value, quantity: value.quantity + 1 }
          : value
      );
      return { ...state, mock: output };
    case 'decrement':
      let res = state.mock.map((value) =>
        value.id === action.payload.userId && value.quantity > 1
          ? { ...value, quantity: value.quantity - 1 }
          : value
      );
      return { ...state, mock: res };
    default:
      return state.mock;
  }
};
