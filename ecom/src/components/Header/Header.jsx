import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/actions'
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
            
                <div className="LoginGuest">
                <p className="UserName">Happy Rollin` {props.user.username}</p>    
                <NavLink to='/login' onClick={logout} exact>Logout</NavLink>
                <NavLink to='/shop' exact><i className="fas fa-shopping-cart"></i></NavLink>

            </div>

                :

                <div className="LoginGuest">
                    <NavLink to='/login' exact>Login</NavLink>
                    <NavLink to='/Register' exact>Register</NavLink>
                    

                </div>



        }
            
            
        </header>
    )
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(Header);
