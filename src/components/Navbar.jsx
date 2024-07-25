import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import "animate.css"

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 0); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${isFixed ? 'fixed w-full top-0 left-0' : 'relative'} bg-black text-white shadow-lg z-50 font-serif text-lg opacity-80 animate__animated animate__bounce`}>
    {/* for large screen */}
    <div className="hidden lg:block">
      <div className=" flex justify-between flex-wrap items-center w-[94%] mx-auto h-20">
      <Link to='/'><img src={logo} alt="logo" className="w-12 hover:w-10" /></Link>
        <div className="grid grid-cols-8 gap-4">
          <p className="hover:text-red-600"><Link to='/'>Home</Link></p>
          <p className="hover:text-red-600"><Link to='/about'>About Us</Link></p>
          <p className="hover:text-red-600"><Link to='/academics'>Academics</Link></p>
          <p className="hover:text-red-600"><Link to='/admissions'>Admissions</Link></p>
          <p className="hover:text-red-600"><Link to='/faculty'>Faculty</Link></p>
          <p className="hover:text-red-600"><Link to='/students'>Student</Link></p>
          <p className="hover:text-red-600"><Link to='/gallery'>Gallery</Link></p>
          <p className="hover:text-red-600"><Link to={'/contact'}>Contact Us</Link></p>
        </div>
      </div>
    </div>
    {/* for small sreen */}
    <div className="lg:hidden">
      <div className="flex justify-between items-center w-[90%] mx-auto h-20">
      <Link to='/'> <img src={logo} alt="logo" className="w-12" /></Link>
      <Hamburger/>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
