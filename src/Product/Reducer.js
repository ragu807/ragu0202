// Reducer.js
export const initialState = { cart: [] };

export function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADDTOCART":
            return { cart: [...state.cart, action.product] };
        case "REMOVE": {
            const index = state.cart.findIndex(item => item.id === action.id);
            if (index >= 0) {
                const updateCart = [...state.cart];
                updateCart.splice(index, 1);
                return { cart: updateCart };
            }
            return state;
        }
        case "CLEAR":
            return { cart: [] };
        default:
            return state;
    }
}
