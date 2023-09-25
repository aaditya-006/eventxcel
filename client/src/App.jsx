import './App.css'
import {SiEventstore} from "react-icons/si"
import {BiSearch} from "react-icons/bi"
import { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming user is initially not logged in

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <SiEventstore className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold text-gray-800">EventXcel</span>
      </div>

      {/* Search Box */}
      <div className="w-1/3 flex ">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none"
          placeholder="Search for events..."
        />
        <button className='mx-5'>
        <BiSearch className='bg-black h-10 w-10 p-2 text-white border rounded-full text-sm	'/>
        </button>
      </div>

      {/* User Section */}
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="relative ml-4">
            <button className="text-gray-800">User</button>
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg hidden">
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">Profile</button>
              <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">Logout</button>
            </div>
          </div>
        ) : (
          <button onClick={handleLogin} className="text-gray-800 mr-4">Login</button>
        )}
        
        <button className="bg-indigo-500 text-white py-2 px-6 rounded-full">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
