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

        <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
          <FeatureCard
            title="Biometric Payments"
            desc="Authenticate users securely with fingerprint or Aadhaar data."
            href="/onboarding"
          />
          <FeatureCard
            title="Wallet Interface"
            desc="Balance, QR scan, and transaction history in one place."
            href="/wallet"
          />
          <FeatureCard
            title="Offline Sync"
            desc="Transact in low-connectivity areas with sync support."
            href="/offline-sync"
          />
          <FeatureCard
            title="Kiosk Access"
            desc="Authenticate users via biometric devices at public terminals."
            href="/kiosk"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}


function FeatureCard({ title, desc, href }) {
  return (
    <Link
      href={href}
      className="group bg-white dark:bg-[#1b1b1b] p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{desc}</p>
      </div>
      <div className="mt-4 text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:underline">
        Tap to View →
      </div>
    </Link>
  );
}
