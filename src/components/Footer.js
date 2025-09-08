import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-gray-200 bg-black text-white font-semibold">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm">
        <p className="mb-2 sm:mb-0">© {currentYear} Food Ordering App</p>
        <nav className="flex items-center gap-8">
          <a className="hover:text-red-600" href="/about">About</a>
          <a className="hover:text-red-600" href="/contact">Contact</a>
          <a className="hover:text-red-600" href="/grocery">Grocery</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

