import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe_container">
        <h2>Subscribe to newsletter</h2>
        <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more</p>
        <div className="subscribe">
            <input type="text" placeholder='Your email' />
            <input type="button" value='SUBSCRIBE' />
        </div>
    </div>
  )
}

export default Subscribe