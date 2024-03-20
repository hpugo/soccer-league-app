import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const user = {
        name: 'John',
    };
    const logout = () => {};
  
    return (   
        <header>
            <div>
                <Link to="/" className='logo'>
                     <img src="https://seeklogo.com/images/S/soccer-club-emblem-logo-D69983F663-seeklogo.com.png" alt="League Logo"/>
                </Link>
                <nav>
                    <ul>
                    {
                        user ? (
                        <li className='container'>
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
