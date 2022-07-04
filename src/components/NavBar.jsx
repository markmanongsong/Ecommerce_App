import { useState } from 'react';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192F] text-gray-300 z-10">
      <h1 className="font-bold text-lg ">MJ COLLECTION</h1>

      {/* Menu */}

      <ul className="hidden md:flex ">
        <li className="px-4 cursor-pointer hover:border-b-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 cursor-pointer hover:border-b-4">
          <Link to="/products/">Products</Link>
        </li>
        <li className="px-4 cursor-pointer hover:border-b-4">About</li>
        <li className="px-4 cursor-pointer hover:border-b-4">Contact</li>
        <Link to={'/Cart'}>
          <li className="bg-white text-black hover:bg-slate-500  hover:text-white px-4 rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart (0)
          </li>
        </Link>
      </ul>
      <div className="md:hidden"></div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl hover:border-b-4">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-4">
          <Link to="/products/">Products</Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-4">About</li>
        <li className="py-6 text-4xl hover:border-b-4">Contact</li>
        <Link to={'/Cart'}>
          <li className="bg-white text-black hover:bg-slate-500  hover:text-white px-4 rounded-full cursor-pointer py-6 text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart (0)
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
