import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <nav className="py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className='flex items-center justify-between w-5/6 mx-auto'>
      <div className="text-3xl font-bold bg-linear-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent cursor-pointer">
        DigiTools
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-600"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">
          <IoCartOutline size={24} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
            2
          </span>
        </div>

        <button className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
          Login
        </button>

        <button className="rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95">
          Get Started
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;