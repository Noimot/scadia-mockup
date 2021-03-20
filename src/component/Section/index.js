import React from 'react';
import { Button} from '../Button'



export const Section = ({ logo2 }) => {
    return (
        <div>
            <img src={logo2} alt="second scadia logo" />
            <h1>Play games in all their glory for free with Stadia Pro</h1>
            <p>Free games. More every month. Keep them as long as you’re a Stadia Pro member.<sup>1</sup></p>
        </div>
    )
}

export const SecondSection = () => {
    return(
        <div className="div-container">
        <Button text="Try Stadia Pro free for 1 month" cssClass="BigButton"/>
        <p style={{color:'#5f6368'}}><sup>1</sup>$9.99/mo after trial, cancel anytime.</p>
      </div>
    )
}