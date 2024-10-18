import React, { useEffect, useState } from 'react'
import './CartPage.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/Footer/Footer'
import CartItem from '../../components/CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { CartState } from '../../types/bookTypes'
import { REMOVE_FROM_CART } from '../../types/actionTypes'

const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartState>()
    const cart = useSelector((state:RootState) => state.cart)
    const dispatch = useDispatch();

    const handleDrop = (isbn13:string) => {
        dispatch({type: REMOVE_FROM_CART, payload: isbn13})

    }

    useEffect(()=>{
        setCartItems(cart)
    },[cart])

    return (
        <div className='cardPage_Container'>
            <Nav />
            <h1>Your cart</h1>
            {cart.items.map((book) => <CartItem cartItem={book} key={book.book.isbn13}  onClick={handleDrop}/> )}
            <div className="total_container">
                <div className="total-wrapper">
                    <div className="total">
                        <p>Sum total</p>
                        <div className="sum">
                            $ {cart.totalAmount}
                        </div>
                    </div>
                    <div className="total">
                        <p>VAT</p>
                        <div className="vat">
                            $ {(cart.totalAmount*0.2).toFixed(2)}
                        </div>
                    </div>
                    <div className="total total-itog">
                        <p>TOTAL:</p>
                        <div className="itog">
                            ${(cart.totalAmount*1.2).toFixed(2)}
                        </div>
                    </div>
                    
                    
                    <input type="button" value='CHECK OUT' />
                </div>
                
                
            </div>
            <Footer />
        </div>
    )
}

export default CartPage