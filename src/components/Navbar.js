import React from 'react'
import { Link } from 'react-router-dom';
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import './style.css';

function Navbar() {

  const cart = useSelector((store) => store);
  console.log(cart);

  return (
    <>
      <nav className='bg-gray-700'>
        <Link to="/cart">
          <div className="right-navbar">
            <IoBasketOutline />
            <span className="notif">{cart.length}</span>
          </div>
        </Link>
        <h1 className="text-3xl font-semibold ">
          Redux Example
        </h1>
        <Link to="/">
          <IoHomeSharp />
        </Link>
      </nav>
      <div className="products">

      </div>
    </>
  )
}

export default Navbar