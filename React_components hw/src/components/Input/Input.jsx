import React from 'react';
import './style.css'

const Input = ({
    placeholder, 
    onChange
})=> {
    return <input
                placeholder={placeholder}
                onChange={(e) => onChange && onChange(e)}
    />
}

export default Input;