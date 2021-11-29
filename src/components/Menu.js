import React from 'react';
import closeIcon from '../assets/icons/icon-close.svg';

export default function Menu(props) {
    return (
        <nav className={props.state}>
            <ul>
                <img 
                    src={closeIcon} 
                    alt='Close menu button'
                    role='button'
                    onClick={() => props.setMenuState(isMenuOpened => !isMenuOpened)}
                    />
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};