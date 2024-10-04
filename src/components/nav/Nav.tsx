import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav_container">
        <div className="flex_wrapper">
            <div className="logo">
                <b>BOOKSTORE</b>
            </div>
            <div className="search">
                <input type="search" />
            </div>
            <div className="menu flex_wrapper">
                <div className="liked">
                    <p>1</p>
                </div>
                <div className="card">
                    <p>2</p>
                </div>
                <div className="profile">
                    <p>3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav