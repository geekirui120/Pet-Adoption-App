import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/pets">Browse Pets</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;