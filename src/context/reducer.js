
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
     default:
       return state
 }
    
}