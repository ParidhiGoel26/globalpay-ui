'use client';

import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        Welcome to GlobalPay 💸
      </h1>

      <p className="text-lg md:text-xl max-w-2xl text-gray-800 dark:text-gray-200 mb-8">
        A modern biometric and Aadhaar-based digital payment platform. Seamless onboarding, secure transactions, and offline support — all in one place.
      </p>

      <div className="space-x-4">
        <Link
          href="/onboarding"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition"
        >
          Get Started
        </Link>

        <Link
          href="/merchant"
          className="bg-white dark:bg-black border border-purple-500 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 dark:hover:bg-gray-900 transition"
        >
          Merchant Login
        </Link>
      </div>

      <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3 w-full max-w-5xl">
        <FeatureCard title="Biometric Payments" desc="Authenticate users securely with fingerprint or Aadhaar data." />
        <FeatureCard title="Wallet Interface" desc="Balance, QR scan, and transaction history in one place." />
        <FeatureCard title="Offline Sync" desc="Transact in low-connectivity areas with sync support." />
      </div>
    </main>
    <Footer/>
    </>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white dark:bg-[#1b1b1b] p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
