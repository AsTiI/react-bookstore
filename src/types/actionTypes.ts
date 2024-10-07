import { CartItem, Book } from "./bookTypes";
import { User, UsersState } from './userTypes'

// Константы для действий
export const ADD_TO_CART = 'ADD_TO_CART';               
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';     
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'; 
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'; 
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'; 

export const SAVE_BOOK_DETAILS = 'SAVE_BOOK_DETAILS';

export const SET_USER = 'SET_USER';
export const SET_LOCAL_STORAGE = 'SET_LOCAL_STORAGE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export type AuthActionTypes =
    | Login
    | Logout

interface SetUser {
    type: typeof SET_USER;
    payload: User;
}

interface SetLocalStorage {
    type: typeof SET_LOCAL_STORAGE;
    payload: User;
}

interface Login {
    type: typeof LOGIN;
    payload: {email: string, password: string} | null
} 

interface Logout {
    type: typeof LOGOUT;
}

export type UserActionTypes =
    | SetUser
    | SetLocalStorage 
    | Login
    | Logout

interface AddToCartAction {
    type: typeof ADD_TO_CART; 
    payload: CartItem;        
}

interface RemoveFromCartAction {
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
    | FetchBooksRequestAction
    | FetchBooksSuccessAction
    | FetchBooksFailureAction;

interface SaveBookDetailsAction {
    type: typeof SAVE_BOOK_DETAILS;
    payload: CartItem;
}

export type BookDetailsActionTypes =
    | SaveBookDetailsAction;
