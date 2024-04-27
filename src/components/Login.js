// Login.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Login was successful
                    localStorage.setItem('user', JSON.stringify(data.user));
                    toast.success('Login successful.');
                    navigate('/home');
                } else {
                    // Login failed
                    toast.error('Login failed. Please check your credentials.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('An error occurred. Please try again.');
            });
    };



    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '20%' }}> {/* This div wraps the form and sets its width */}
                <h2 className="text-center">Login</h2>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginBottom: '20px' }}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleLogin} style={{ marginTop: '10px' }}>Login</button>
                <Link className="btn btn-primary" style={{ marginTop: '10px', marginLeft: '10px' }} to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Login;
