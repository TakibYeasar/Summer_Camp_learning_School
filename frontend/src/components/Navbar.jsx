import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaUnlockAlt, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-tertiary-color">
      <div className="container py-4 flex items-center justify-around">
        <div className="text-3xl no-underline text-primary-color font-bold mb-4"><a href="/" className="block">SCL <span className='text-secondary-color'>School</span></a></div>
        <div className="relative text-right">
          <ul className="mr-auto flex ">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/aboutus" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="/all-courses" className="nav-link">Courses</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
        <div className="text-right flex">
          <a href="/login" className="text-base font-normal text-primary-color  flex"><FaUnlockAlt className='nav-link' /> Log In</a>
          <a href="/register" className="btn-style flex"><FaUserAlt className='nav-link text-font-light' /> Register</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar