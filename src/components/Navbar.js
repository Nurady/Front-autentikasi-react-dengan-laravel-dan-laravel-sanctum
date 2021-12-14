import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticated } from '../store';
// import toaster from 'toasted-notes';
// import 'toasted-notes/src/styles.css';

function Navbar() {
    // const auth = useRecoilValue(authenticated)
    const [auth, setAuth] = useRecoilState(authenticated)
    const logout = async(e) => {
        e.preventDefault()
        try {
            await axios.post('logout')     
            setAuth({ check: false })     
            localStorage.removeItem('tokenUser') 
            // toaster.notify(response.data.message)                
        } catch (e) {
            // toaster.notify(e.message)
            console.log(e)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact="true" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>

                    {
                        auth.check ? 
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">{auth.user.name}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="nav-link btn"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul> 
                            :
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;