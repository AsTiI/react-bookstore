import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import liked from '../../images/nav/heart1.png'
import cart from '../../images/nav/shopping-bag1.png'
import profile from '../../images/nav/person.png'
import InputBtn from '../Button/InputBtn'

interface ButtonComponentProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    search?: string;
}
const Nav: React.FC<ButtonComponentProps>  = ({ onChange=()=>{}, search=''}) => {
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
            {/* {onChange? */}
                <InputBtn className='grow' placeholder='Search' value={search} type='search' onChange={onChange}/>
                {/* : */}
                {/* <InputBtn className='grow' placeholder='Search' value={search} type='search' /> */}
            {/* } */}
            </div>
            
            <div className="menu_wrapper">
                <div className="liked">
                    {/* <img src={liked} onClick={handleLiked} /> */}
                </div>
                <div className="cart">
                    <img src={cart} onClick={handleCart} />
                </div>
                <div className="profile">
                    <img src={profile} onClick={handleProfile} />
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Nav