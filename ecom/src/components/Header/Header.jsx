import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss'



const Header = ( props ) => {

    console.log(props);

    return (
        <header className="Header">
            <div className="Logo">


            </div>
            <div className="NavButtons">

                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/products' exact>Products</NavLink>
                <NavLink to='/' exact>About this</NavLink>

            </div>
            { props.user ?
            
                <div className="LoginUser">
                    <NavLink to='/login' exact>Login</NavLink>
                    <NavLink to='/Register' exact>Register</NavLink>

                </div>

                :

                <div className="LoginUser">
                <NavLink to='/login' exact>Logout</NavLink>
                <NavLink to='/Register' exact>Register</NavLink>

            </div>

        }
            
            
        </header>
    )
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(Header);
