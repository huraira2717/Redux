import React, { useState } from 'react';
import './Navbar.css'; // CSS file for styling
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="https://staging.daraz.com/wp-content/uploads/2021/11/daraz-logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={`navbar__list ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="#">Categories</Link></li>
          <li><Link to="#">Deals</Link></li>
          <li><Link to="#">Fashion</Link></li>
          <li><Link to="#">Electronics</Link></li>
          <li><Link to="#">Mobiles & Tablets</Link></li>
          <li><Link to="#">Home & Living</Link></li>
        </ul>
      </div>
      <div className="navbar__actions">
        <input type="text" placeholder="Search..." />
        <Link to={'/'}>
          <button>Login</button>
        </Link>
        <Link to={'/cart'} className='flex cursor-pointer bg-orange-400 h-8 justify-center items-center text-center p-2 rounded-sm'>
          Items <BsFillCartFill className='mx-2' /> {items.length}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
