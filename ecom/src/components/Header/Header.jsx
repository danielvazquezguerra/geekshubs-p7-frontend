import React from 'react'
<<<<<<< HEAD
import './Header.scss'

const Header = (props) => {

    return (
        <div className="Header">
               
        </div>
    )
}

export default Header
=======
import { NavLink } from 'react-router-dom';
import './Header.scss'



const Header = () => {
    return (
        <header className="Header">
            <div className="Logo">


            </div>
            <div className="NavButtons">

            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/' exact>Products</NavLink>
            <NavLink to='/' exact>About this</NavLink>

            </div>
            <div className="Login">


            </div>
            
            
        </header>
    )
}

export default Header;
>>>>>>> dev
