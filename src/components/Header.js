import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between text-white">
       
      <div className="flex items-center">
        <img
          src="/logo.webp"  
          alt="ConnectEd Logo"
          className="h-8 w-8 mr-2"
        />
        <div className="text-sm">
          <span className="block font-bold">ConnectEd</span>
        </div>
      </div>

       
      <div className="text-xl font-bold">Student Portal</div>

       
      <div className="text-right pr-5">
        <span className="block font-semibold">Hello, Gabrisa!</span>
        <span className="text-sm">Class 7, Math + Science</span>
      </div>
    </header>
  );
};

export default Header;

