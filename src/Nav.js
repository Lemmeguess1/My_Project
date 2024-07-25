import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
