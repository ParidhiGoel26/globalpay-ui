'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Technology', href: '/technology' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-gray-900 dark:text-white">GlobalPay</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-full transition"
              >
                {label}
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-gray-100" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-gray-100" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 px-4 pb-4 space-y-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {label}
            </Link>
          ))}

          {/* Theme Toggle in Mobile View */}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
