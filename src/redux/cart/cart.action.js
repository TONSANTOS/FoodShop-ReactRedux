import { CartActioTypes } from './cart.actionTypes';

export const cartAddItem = (item) => ({
    type: CartActioTypes.CART_ADD_ITEM,
    payload: item,
});

export const cartRemoveItem = (item) => ({
    type: CartActioTypes.CART_REMOVE_ITEM,
    payload: item,
});