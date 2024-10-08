import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate('/profile')
    }
    const handleBooks = () => {
        navigate('/')
    }
    const handleCart = () => {
        navigate('/cart')
    }
    const handleLiked = () => {
        navigate('/liked')
    }
  return (
    <div className="nav_container">
        <div className="flex_wrapper">
            <div className="logo" onClick={handleBooks}>
                <b>BOOKSTORE</b>
            </div>
            <div className="search">
                <input type="search" />
            </div>
            <div className="menu flex_wrapper">
                <div className="liked">
                    <p onClick={handleLiked}>Liked</p>
                </div>
                <div className="cart">
                    <p onClick={handleCart}>Cart</p>
                </div>
                <div className="profile">
                    <p onClick={handleProfile}>Profile</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav