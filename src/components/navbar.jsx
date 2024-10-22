import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import image from "./logos/machipng.png";
import './navbar.css';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";

export const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="links">
        <Link to="/"><img className='logo' src={image}/></Link>
        <Link to="/cart">
          <ShoppingCart size = {32} />
        </Link>
      </div>
    </div>
  );
};