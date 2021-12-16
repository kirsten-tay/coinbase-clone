import React from 'react';
import logo from './../Assets/logo.Svg';



const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7x1 mx-auto ">
        <div className="flex justify-between items-center py-5 px-10">
          <div className="flex flex-1 justify-start">
            <img src={logo}  alt={" top "} className="w-20" />
          </div>

          <nav className="space-x-10 flex">
            <a  href="Hero" className="text-sm">Prices</a>
            <a  href= "Phone" className="text-sm">Learn</a>
            <a href= "Sec" className="text-sm">Individual</a>
            <a href= "Table" className="text-sm">Businesses</a>
            <a href= "Hero" className="text-sm">Developers</a>
            <a href= "Hero" className="text-sm">Company</a>
          </nav>
          <div className="flex flex-1 items-center justify-end">
            <button className="border-o outline-none hover:text-blue-700 font-medium p-2">
              Sign in
            </button>

            <button className="border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Navbar;