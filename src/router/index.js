import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Navbar from '../components/Navbar';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import Guest from '../middleware/Guest';
import Dashboard from '../views/Dashboard';
import Authenticated from '../middleware/Authenticated';

function Router(props) {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="mt-3">
                    <Routes>
                        <Route exact="true" path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route 
                            path="/dashboard" 
                            element={
                                <Authenticated>
                                    <Dashboard />
                                </Authenticated>
                            } 
                        />
                        <Route 
                            path="/login" 
                            element={
                                <Guest>
                                    <Login />
                                </Guest>
                            } 
                        />
                        <Route 
                            path="/register" 
                            element={
                                <Guest>
                                    <Register />
                                </Guest>
                            } 
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;