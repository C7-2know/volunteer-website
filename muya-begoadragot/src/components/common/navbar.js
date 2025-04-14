import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 dark:bg-light p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Logo</div>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none">
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"/></svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/></svg>
            )}
          </button>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="text-white dark:text-black hover:bg-gray-700 px-3 py-2 rounded">Home </a>
            <a href="#" className="text-white dark:text-black hover:bg-gray-700 px-3 py-2 rounded">About </a>
            <a href="#" className="text-white dark:text-black hover:bg-gray-700 px-3 py-2 rounded">Services </a>
            <a href="#" className="text-white dark:text-black hover:bg-gray-700 px-3 py-2 rounded">Contact </a>
          </div>
        </div>

        <div className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden mt-4 flex justify-end`}>
          <a href="#" className="block text-white dark:text-black hover:bg-gray-700 px-3 py-1 rounded">Home</a>
          <a href="#" className="block text-white dark:text-black hover:bg-gray-700 px-3 py-1 rounded">About</a>
          <a href="#" className="block text-white dark:text-black hover:bg-gray-700 px-3 py-1 rounded">Services</a>
          <a href="#" className="block text-white dark:text-black hover:bg-gray-700 px-3 py-1 rounded">Contact </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;