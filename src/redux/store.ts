import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { booksReducer } from './bookReducer';
import { cartReducer } from './cartReducer';
import { bookDetailsReducer } from './bookDetailsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  books: booksReducer,
  details: bookDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const customMiddleware: Middleware[] = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export default store;