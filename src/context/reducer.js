
export const reducer = (state, action) => {
 switch (action.type) {
     case 'add':
         let output = state?.mock?.filter((value) => value.id === action.payload.id);
         let added = [...state.products, ...output];
         return { ...state, products: added };
     case 'basket':
         console.log(state.basket);
         return { ...state, basket: !state.basket }
     default:
       return state
 }
    
}