export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] }
        case "CLEAR_CART":
            return { ...state, cart: [] }
        case "DELETE_ITEM": {
            const updatedCart = state.cart.filter((item) => item._id !== action.payload);
            return { ...state, cart: updatedCart };
        }
        default:
            return state;
    }

}