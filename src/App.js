// App.js

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} exact />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

