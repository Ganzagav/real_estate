import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-white border-t border-brand-border-dark py-16 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22H22L12 2Z" fill="currentColor"/>
            </svg>
            TUNGA
          </h3>
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
            Redefining residential living by blending innovative architecture with highly functional, tailored design.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-500">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#offerings" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-500">Socials</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center border-t border-brand-border-dark pt-8 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Tunga Architecture. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}