import { combineReducers } from "redux";

import cartSlice from "./cartSlice";

export const rootReducer = combineReducers({ cart: cartSlice });
