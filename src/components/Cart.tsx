import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../types/actionTypes';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart); 

    const handleRemoveFromCart = (isbn13: string) => {
        dispatch({ type: REMOVE_FROM_CART, payload: isbn13 });
    };

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length === 0 && <p>Ваша корзина пуста</p>}
            <ul>
                {cartItems.map((item: any) => (
                    <li key={item.isbn13}>
                        {item.title} - {item.quantity} шт.
                        <button onClick={() => handleRemoveFromCart(item.isbn13)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;