'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-purple-50 dark:bg-gray-900 text-black dark:text-white border-t border-gray-300 dark:border-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logo.png" alt="GlobalPay Logo" width={40} height={40} />
            <span className="ml-2 font-bold text-xl">GlobalPay</span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Empowering digital payments with biometric and Aadhaar-based innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/technology">Technology</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">Contact</h3>
          <p className="text-sm">Email: support@globalpay.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} GlobalPay. All rights reserved.
      </div>
    </footer>
  );
}
