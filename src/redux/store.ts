import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { booksReducer } from './reducers/bookReducer';
import { cartReducer } from './reducers/cartReducer';
import { bookDetailsReducer } from './reducers/bookDetailsReducer';
import { userReducer } from './reducers/userReducer';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  books: booksReducer,
  details: bookDetailsReducer,
  user: userReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const customMiddleware: Middleware[] = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export default store;