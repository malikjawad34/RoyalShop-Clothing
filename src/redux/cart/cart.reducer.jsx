import hiddenActionType from './cart.types';
import { AddItemToCart, RemoveItemFromCart } from './cart.utiles';

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = ( state = INTIAL_STATE, action) => {
    switch (action.type) {
        case hiddenActionType.SetHidden:
            return {
                ...state,
                hidden: action.payload
            }
        case hiddenActionType.addItem:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
        case hiddenActionType.removeItem:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        case hiddenActionType.DecreaseItem:
            return {
                ...state,
                cartItems: RemoveItemFromCart(state.cartItems, action.payload)
            }
        default:
                return state;
    }
}

export default cartReducer;