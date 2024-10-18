import React, { useState, useEffect } from 'react'
import './CartItem.css'
import { CartItemState } from '../../types/bookTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../types/actionTypes';

interface CartProps {
    cartItem: CartItemState;
    onClick: (isbn13: string) => void;
}

const CartItem: React.FC<CartProps> = ({ cartItem, onClick }) => {
    const [counter, setCounter] = useState(0)
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch({ type: ADD_TO_CART, payload: { ...cartItem, quantity: cartItem.quantity + 1 } });
    }

    const handleDec = () => {
        if (cartItem.quantity - 1)
            dispatch({ type: ADD_TO_CART, payload: { ...cartItem, quantity: cartItem.quantity - 1 } });
        else
            dispatch({ type: REMOVE_FROM_CART, payload: cartItem.book.isbn13 })
    }

    return (
        <div className="cart_container">
            <div className='cart_item'>
                <img src={cartItem.book.image} alt={cartItem.book.title} />

                <div className="about">
                    <div className='bookTitle' key={cartItem.book.isbn13}>
                        <a href={`/books/${cartItem.book.isbn13}`}>{cartItem.book.title}</a>
                    </div>
                    <div className="bookSubtitle">
                        <p>{cartItem.book.subtitle}</p>
                    </div>
                    <div className="bookCount">
                        <div className="decrement" onClick={handleDec}>-</div>
                        <p>{cartItem.quantity}</p>
                        <div className="increment" onClick={handleInc}>+</div>
                    </div>
                </div>
                <div className="price">
                    <p>${(parseFloat(cartItem.book.price.replace(/[$,]/g, '')) * cartItem.quantity).toFixed(2)}</p>
                </div>
                {/* <div className="dropBooks" onClick={(e) => onClick(parseInt(cartItem.book.isbn13))}> */}
                <div className="dropBooks" onClick={(e) => onClick(cartItem.book.isbn13)}>
                    <p>+</p>
                </div>
                
            </div>
            <hr />
        </div>
        
    )
}

export default CartItem