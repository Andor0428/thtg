'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Employers', href: '/employers' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-garet font-bold text-primary">THTG</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-primary hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary bg-white hover:bg-white/90 text-[#2ab0b4] border-2 border-[#2ab0b4]"
            >
              Send Your Application
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-text-primary hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 text-center btn-primary bg-white hover:bg-white/90 text-[#2ab0b4] border-2 border-[#2ab0b4]"
                onClick={() => setIsOpen(false)}
              >
                Send Your Application
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 
