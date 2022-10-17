
export const reducer = (state, action) => {
 switch (action.type) {
     case 'add':
         let output = state?.mock?.map((value) => value.id === action.payload.id && { ...value, addtocart: true, quantity: 1 });
         output = output.filter((value) => value && value);
         let added = [...state.products, ...output];
         let reset = state?.mock?.map((value) => value.id === action.payload.id ? output[0] : value);
         console.log(reset,'reset');
         return { ...state, products: added, mock:reset };
     case 'basket':
         return { ...state, basket: !state.basket }
     case 'delete':
         let result = state?.products?.filter((value) => value.id !== action.payload.id);
         return { ...state, products: result };
     case 'increment':
         let addNum = state?.products?.map((value) => value.id === action.payload.id ? { ...value, quantity: value.quantity + 1 } : value);
         return { ...state, products: addNum };
     case 'decrement':
         let reduceNum = state?.products?.map((value) => value.id === action.payload.id && value?.quantity > 1 ? { ...value, quantity: value?.quantity - 1 } : value);
         return { ...state, products: reduceNum };
     default:
       return state
 }
    
}