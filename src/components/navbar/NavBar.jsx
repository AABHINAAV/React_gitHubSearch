import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return <>
        <header>
            <NavLink exact to='/' activeClassName='activeLink' className='link'>HOME</NavLink>
            <NavLink exact to='/about' activeClassName='activeLink' className='link'>ABOUT</NavLink>
        </header>
    </>;
}

export default NavBar;