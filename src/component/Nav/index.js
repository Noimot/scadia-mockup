import React from "react";
import {Button} from '../Button'

const Nav = ({ scadiaLogo }) => {
    return (
        <div>
            <header>
                <nav className='nav-header'>
                    <h3><i class="fas fa-shopping-bag"></i> &nbsp; Play Cyberpunk 2077 on Stadia!</h3>
                    <p><a className='nav-link' href="#">Click here to Buy Now.</a> &nbsp;No subscription required.</p>
                </nav>
                <ul className='nav-ul'>
                    <li><img src={scadiaLogo} /></li>
                    <div className='nav-li'>
                        <li>About Stadia</li>
                        <li style={{color:'#de3334'}}>Games</li>
                    </div>
                    <div className='nav-li'>
                        <li style={{color:'#de3334'}}>Sign in</li>
                        <Button text={"Try now"}/>
                    </div>
                </ul>
            </header>

        </div>
    );
}


export default Nav