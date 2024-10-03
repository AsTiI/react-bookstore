import { BookActionTypes, 
        ADD_TO_CART, 
        REMOVE_FROM_CART } from '../types/actionTypes';
import { CartState }  from '../types/bookTypes'

const initialCartState: CartState = {
    items: [{
        book: {
            title: "",
            subtitle: "",
            isbn13: "",
            price: "",
            image: "",
            url: "",
        },
        quantity: 0,
    }],
    totalAmount: 0,
    };

export const cartReducer = (state = initialCartState, action: BookActionTypes): CartState => {
    switch (action.type) {
       case ADD_TO_CART:
            console.log(state.items);
            
           const existingItemIndex = state.items.findIndex(item => item.book.isbn13 === action.payload.book.isbn13);
           const existingItem = state.items[existingItemIndex];
           let updatedItems;
    
           if (existingItem) {
               const updatedItem = { ...existingItem, quantity: existingItem.quantity + action.payload.quantity };
               updatedItems = [...state.items];
               updatedItems[existingItemIndex] = updatedItem;
           } else {
               updatedItems = state.items.concat(action.payload);
           }
           
           
           const totalAmount = updatedItems.reduce((total, item) => total + parseFloat((item.book.price).replace(/[^0-9.-]+/g,""))*item.quantity, 0);
           
           return {
               ...state,
               items: updatedItems,
               totalAmount,
           };
       case REMOVE_FROM_CART:
           const filteredItems = state.items.filter(item => item.book.isbn13 !== action.payload);
           const newTotalAmount = filteredItems.reduce((total, item) => total + parseFloat(item.book.price)*item.quantity, 0);
           return {
               ...state,
               items: filteredItems,
               totalAmount: newTotalAmount,
           };
       default:
           return state;
    }
};