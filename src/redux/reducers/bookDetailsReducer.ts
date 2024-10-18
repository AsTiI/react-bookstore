import { BookDetailsActionTypes,
    SAVE_BOOK_DETAILS} from '../../types/actionTypes';
import { BookDetailsState }  from '../../types/bookTypes'

const initialBookDetailsState: BookDetailsState = {
    title: "",
    subtitle: "",
    isbn13: "",
    price:"",
    image: "",
    url: "", 
    author: "",
    desc: "",
    error: "",
    isbn10: "",
    language: "",
    pages: "",
    pdf: "",
    publisher: "",
    rating: "",
    year: "",
};

export const bookDetailsReducer = (state = initialBookDetailsState, action: BookDetailsActionTypes): BookDetailsState => {
switch (action.type) {
    case SAVE_BOOK_DETAILS:
        return state
   default:
       return state;
}
};