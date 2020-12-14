import React from 'react';
import './style.css'

const Button = ({
   
    onClick,
    children
})=> {
    return <button
               onClick={(e) => onClick && onClick(e)}>
                   {children}
            </button>
   
}

export default Button;