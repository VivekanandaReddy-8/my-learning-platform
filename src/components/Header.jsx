import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-200">
              E
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Edu<span className="text-blue-600">Quest</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
            <a href="#home" className="text-blue-600 hover:text-blue-700 transition-colors">Home</a>
            <a href="#courses" className="hover:text-blue-600 transition-colors">Courses</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Login
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a href="#home" className="block py-2 text-blue-600 font-medium">Home</a>
          <a href="#courses" className="block py-2 text-gray-600 font-medium hover:text-blue-600">Courses</a>
          <a href="#about" className="block py-2 text-gray-600 font-medium hover:text-blue-600">Contact</a>
          <a href="#contact" className="block py-2 text-gray-600 font-medium hover:text-blue-600">About</a>
          <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100">
            <button className="w-full py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl">
              Login
            </button>
            <button className="w-full py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}