// Register.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Registration was successful
                    toast.success('Registration successful. Please login.');
                    navigate('/login');
                } else {
                    // Registration failed
                    toast.error('Registration failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('An error occurred. Please try again.');
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ margin: '10px 0', width: '20%' }}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: '10px 0', width: '20%' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: '10px 0', width: '20%' }}
            />
            <button className="btn btn-primary" onClick={handleRegister} style={{ margin: '5px 0' }}>Submit</button>
            <Link className="btn btn-primary" style={{ marginTop: '0px', marginLeft: '0px' }} to="/login">Back to Login</Link>

        </div>
    );
};

export default Register;
