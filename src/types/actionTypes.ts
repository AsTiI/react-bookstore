import { CartItemState, Book, BookDetailsState } from "./bookTypes";
import { User } from './userTypes'

// Константы для действий
export const ADD_TO_CART = 'ADD_TO_CART';               
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';     
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'; 
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'; 
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'; 
export const FILTER_BOOKS = 'FILTER_BOOKS'

export const SAVE_BOOK_DETAILS = 'SAVE_BOOK_DETAILS';

export const SET_USER = 'SET_USER';
export const SET_LOCAL_STORAGE = 'SET_LOCAL_STORAGE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

interface UpdateProfile {
    type: typeof UPDATE_PROFILE;
    payload: User
}

interface LoginAuth {
    type: typeof LOGIN;
    payload: User
} 

export type AuthActionTypes =
    | LoginAuth
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
    | UpdateProfile

interface AddToCartAction {
    type: typeof ADD_TO_CART; 
    payload: CartItemState;        
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

interface FilterBooksAction {
    type: typeof FILTER_BOOKS;
    payload: string;
}

export type BookActionTypes =
    | AddToCartAction
    | RemoveFromCartAction
    | FetchBooksRequestAction
    | FetchBooksSuccessAction
    | FetchBooksFailureAction
    | FilterBooksAction;

interface SaveBookDetailsAction {
    type: typeof SAVE_BOOK_DETAILS;
    payload: BookDetailsState;
}

export type BookDetailsActionTypes =
    | SaveBookDetailsAction;
