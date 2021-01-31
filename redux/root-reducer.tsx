import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import {sectionReducer} from './sections/sections.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  section: sectionReducer,
});

