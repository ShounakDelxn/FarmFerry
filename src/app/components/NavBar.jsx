'use client'
import { Logo } from "./Logo";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refreshPage = () => {
    window.location.href = '/';
  };

  return (
    <nav className="w-full py-2">
      <div className="bg-white shadow-md rounded-xl mx-8 px-6 h-16 flex items-center justify-between font-serif">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center: Menu List */}
        <ul className="flex space-x-6 text-gray-700 text-sm font-medium items-center">
          <li onClick={refreshPage} className="hover:text-green-700 cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-green-700 cursor-pointer">About</li>
          <li onClick={() => scrollToSection("products")} className="hover:text-green-700 cursor-pointer">Products</li>
        </ul>

        {/* Right: Button */}
        <button 
          type="button"
          className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs px-4 py-1.5 rounded-md shadow-sm transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
}
