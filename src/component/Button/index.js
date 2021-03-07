import React from 'react';
import './style.css'

export const Button = ({text, cssClass="Button-style"}) => {
    return (
        <div>
            <button className={cssClass}>{text}</button>
        </div>
    )
}

