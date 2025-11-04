import React, { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 bg-background/80 glass">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          SafeVoice 🔒
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/feed" className="text-white">Feed</a>
          <a href="/communities" className="text-white">Communities</a>
          <a href="/helplines" className="text-white">Helplines</a>
          <a href="/memorial" className="text-white">Memorial</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-white">Student#XXXX</span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Connect Wallet
          </button>
        </div>
        <div className="md:hidden">
          {/* Hamburger Menu Icon */}
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
