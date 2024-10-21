import React, { useState } from 'react'
import './Subscribe.css'
import InputBtn from '../Button/InputBtn'
import Button from '../Button/Button'

const Subscribe = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="subscribe_container">
        <h2>Subscribe to newsletter</h2>
        <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more</p>
        <div className="subscribe">
            <InputBtn className='inputBtn' value={email} required={true} onChange={(e)=>setEmail(e.target.value)} placeholder='Your email' />
            <Button className='btn' value='SUBSCRIBE'/>
            {/* <input type="text" placeholder='Your email' /> */}
            {/* <input type="button" value='SUBSCRIBE' /> */}
        </div>
    </div>
  )
}

export default Subscribe