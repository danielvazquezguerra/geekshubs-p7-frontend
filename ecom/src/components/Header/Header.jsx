import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.scss'



const Header = () => {
    return (
        <header className="Header">
            <div className="Logo">


            </div>
            <div className="NavButtons">

                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/products' exact>Products</NavLink>
                <NavLink to='/' exact>About this</NavLink>

            </div>
            <div className="Login">
                <NavLink to='/login' exact>Login</NavLink>
                <NavLink to='/Register' exact>Register</NavLink>



            </div>
            
            
        </header>
    )
}

export default Header;
