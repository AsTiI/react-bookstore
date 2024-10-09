import { Book, CartItemState } from '../types/bookTypes';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItemState;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string;
}

interface SaveBookDetailsAction {
  type: typeof REMOVE_FROM_CART;
  payload: string;
}

interface FetchBooksRequestAction {
  type: typeof FETCH_BOOKS_REQUEST;
}

interface FetchBooksSuccessAction {
  type: typeof FETCH_BOOKS_SUCCESS;
  payload: Book[];
}

interface FetchBooksFailureAction {
  type: typeof FETCH_BOOKS_FAILURE;
  payload: string;
}

export type BookActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | SaveBookDetailsAction
  | FetchBooksRequestAction
  | FetchBooksSuccessAction
  | FetchBooksFailureAction;