import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">MyApp</Link>
          </div>
          <div className="navbar-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

