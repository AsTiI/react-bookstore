import React, { useEffect, useState } from 'react'
import './CartPage.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/Footer/Footer'
import CartItem from '../../components/CartItem/CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { CartState } from '../../types/bookTypes'

const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartState>()
    const cart = useSelector((state:RootState) => state.cart)

    const handleDrop = (id:number) => {
        console.log(id);
    }

    useEffect(()=>{
        setCartItems(cart)
    },[])

    return (
        <div className='cardPage_Container'>
            <Nav />
            <h1>Your cart</h1>
            {cart.items.map((book) => <CartItem cartItem={book} key={book.book.isbn13}  onClick={handleDrop}/> )}
            <div className="total">
                <p>TOTAL: ${cart.totalAmount}</p>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage