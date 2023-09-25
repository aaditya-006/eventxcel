import './App.css'
import {SiEventstore} from "react-icons/si"

function App() {

  return (
   <>
   <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold text-gray-800">EventXcel</span>
      </div>

      {/* Search Box */}
      <div className="w-1/3">
        <input
          type="text"
          className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none"
          placeholder="Search for events..."
        />
      </div>

      {/* User Section */}
      <div className="flex items-center">
        <button className="text-gray-800 mr-4">Login</button>
        <button className="bg-indigo-500 text-white py-2 px-6 rounded-full">Sign Up</button>
      </div>
    </nav>

   </>
  )
}

export default App
