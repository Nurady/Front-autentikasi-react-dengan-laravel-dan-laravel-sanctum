import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Navbar from '../components/Navbar';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

function Router(props) {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="mt-3">
                    <Routes>
                        <Route exact="true" path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;