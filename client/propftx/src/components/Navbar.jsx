// Navbar.jsx
import React from 'react';
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎬 MovieApp</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};
