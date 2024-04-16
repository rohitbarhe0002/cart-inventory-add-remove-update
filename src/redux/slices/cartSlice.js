import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cart = [...state.cart, { ...action.payload }];
    },
    updateCartItem: (state, action) => {
      const { itemId, actionType } = action.payload;
      state.cart = state.cart.map((item) => {
        if (item.id === itemId) {
          let newQuantity;
          if (actionType === "INCR") {
            newQuantity = item.quantity + 1;
          } else {
            newQuantity = item.quantity - 1 >= 0 ? item.quantity - 1 : 0;
          }
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.price,
          };
        }
        return item;
      });
    },

    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addItemToFavorite: (state, action) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.id == action.payload
          ? { ...cartItem, isFavourite: !cartItem.isFavourite }
          : cartItem
      );
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addCartItem, updateCartItem, addItemToFavorite, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
