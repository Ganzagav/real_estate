import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wider text-brand-charcoal flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22H22L12 2Z" fill="currentColor"/>
        </svg>
        TUNGA
      </Link>

      {/* Desktop Menu - Pill Shape */}
      <div className="hidden md:flex items-center gap-8 bg-black/5 backdrop-blur-md border border-black/10 rounded-full px-8 py-3 text-sm font-medium text-brand-charcoal">
        <Link to="/" className="hover:opacity-60 transition-opacity">HOME</Link>
        <a href="#about" className="hover:opacity-60 transition-opacity">ABOUT</a>
        <a href="#offerings" className="hover:opacity-60 transition-opacity">PROJECTS</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">CONTACT</a>
      </div>

      {/* CTA Button */}
      <button className="hidden md:flex items-center gap-2 bg-white text-brand-charcoal px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm">
        Book a Call <BsArrowUpRight className="text-lg" />
      </button>
    </nav>
  );
}