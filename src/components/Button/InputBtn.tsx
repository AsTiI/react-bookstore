import React from 'react'
import './InputBtn.css'

interface ButtonComponentProps {
    value:string;
    type?: string;
    required?: boolean
    className?: string;
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InputBtn: React.FC<ButtonComponentProps> = ({ value, type = 'text', className, required=false, placeholder, onChange}) => {
  return (
    // style={{width: `${value.length+10}ch`, transition: 'width 0.2s',}}
    <input  className={'input_btn '+className} placeholder={placeholder} type={type} required={required} value={value} onChange={onChange} />
  )
}

export default InputBtn