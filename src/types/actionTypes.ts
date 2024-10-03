import { CartItem, Book } from "./bookTypes";

// Константы для действий
export const ADD_TO_CART = 'ADD_TO_CART';               
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';     
export const SAVE_BOOK_DETAILS = 'SAVE_BOOK_DETAILS';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'; 
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'; 
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'; 


interface AddToCartAction {
    type: typeof ADD_TO_CART; 
    payload: CartItem;        
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART; 
    payload: string;
}

interface SaveBookDetailsAction {
    type: typeof SAVE_BOOK_DETAILS;
    payload: CartItem;
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
    | FetchBooksRequestAction
    | FetchBooksSuccessAction
    | FetchBooksFailureAction;

export type BookDetailsActionTypes =
    | SaveBookDetailsAction;