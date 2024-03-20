import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/header.css'

export default function Header() {
    const user = {
        name: 'John',
    };
    const logout = () => {};
  
    return (   
        <header className='header-container'>
            <div className='container'>
                <div className='logo'>
                <Link to="/">
                     <img src="https://seeklogo.com/images/S/soccer-club-emblem-logo-D69983F663-seeklogo.com.png" alt="League Logo"/>
                </Link>
                     <h1>Henry's Soccer League</h1>
                </div>
                <nav className='nav-bar'>
                    <ul>
                        <li>
                            <Link to='/league'>League</Link>
                        </li>
                        <li>
                            <Link to='/teams'>Teams</Link>
                        </li>
                        <li>
                            <Link to='/photos'>Photos</Link>
                        </li>
                    {
                        user ? (
                        <li className='menu-container'>
                            <Link to='/profile'>{user.name}</Link>
                            <div className='profile-menu'>
                                <Link to='/profile'>Profile</Link>
                                <Link to='/fixtures'>Matches</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </li> 
                        ) :(
                        <Link to='/login'>Login</Link>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
