import { BookActionTypes,
    FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, 
    FETCH_BOOKS_FAILURE } from '../types/actionTypes';
import { BooksState }  from '../types/bookTypes'

const initialBooksState: BooksState = {
    books: [],
    loading: false,
    error: null,
};

export const booksReducer = (state = initialBooksState, action: BookActionTypes): BooksState => {
switch (action.type) {
   case FETCH_BOOKS_REQUEST:
       return { ...state, loading: true, error: null };
   case FETCH_BOOKS_SUCCESS:
        state = { ...state, loading: false, books: action.payload }
       return state;
   case FETCH_BOOKS_FAILURE:
       return { ...state, loading: false, error: action.payload };
   default:
       return state;
}
};