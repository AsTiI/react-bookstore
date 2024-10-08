import React, { useState, useEffect } from 'react'
import './CartItem.css'

interface CartProps {
    onClick: (id:number)=> void;
}

const CartItem: React.FC<CartProps>  = ({onClick}) => {
    const [counter, setCounter] = useState(0)

    const handleInc = () => {
        setCounter(counter+1)
    }
    const handleDec = () => {
        setCounter(counter?counter-1:0);
    }
    return (
        <div className='cart_item'>
            <div className="img">
                <img src="" />
            </div>
            <div className="about">
                {/* <div className='bookTitle' key={book.isbn13}>
                    <a href={`/books/${book.isbn13}`}>{book.title}</a>
                </div>
                <div className="bookSubtitle">
                    <p>{book.subtitle}</p>
                </div> */} 
                <div className="bookCount">
                    <div className="decrement" onClick={handleDec}>-</div>
                    <p>{counter}</p>
                    <div className="increment" onClick={handleInc}>+</div>
                </div>
            </div>
            <div className="price">
                <p>${Math.round(12.40*counter)}</p>
            </div>
            <div className="dropBooks" onClick={(e)=> onClick(counter)}>
                <p>+</p>
            </div>
        </div>
    )
}

export default CartItem