import CartActionsTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM,
  payload: item,
});

export const removeItemByQuantity = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM_BY_QUANTITY,
  payload: item,
});
