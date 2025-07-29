'use client';

import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f] px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-start">
        {/* Left Side */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            Let’s Connect 👉🏻
          </h2>
          <p className="text-gray-800 dark:text-gray-300 mb-2">
            Have questions or suggestions?
          </p>
          <p className="text-gray-800 dark:text-gray-300 mb-6">
            We are here to help you.
          </p>

          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Follow us 👇🏻
          </h3>
          <SocialLinks />
        </div>

        {/* Right Side */}
        <div className="bg-white dark:bg-[#1b1b1b] p-8 rounded-xl shadow-md w-full border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">
            Contact Form
          </h3>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
