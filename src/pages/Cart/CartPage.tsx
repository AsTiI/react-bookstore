import React, { useState } from 'react'
import './CartPage.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/Footer/Footer'
import CartItem from '../../components/CartItem/CartItem'

const CartPage = () => {
    const handleDrop = (id:number) => {
        console.log(id);
        
    }
    return (
        <div className='cardPage_Container'>
            <Nav />
            <h1>Your cart</h1>
            {/* {books.map((book) => <CartItem isbn13={book.isbn13} /> )} */}
            <CartItem onClick={handleDrop}/>
            <CartItem onClick={handleDrop}/>
            <CartItem onClick={handleDrop}/>
            <Footer />
        </div>
    )
}

export default CartPage