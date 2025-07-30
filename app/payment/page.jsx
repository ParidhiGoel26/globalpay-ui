'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const [aadhaar, setAadhaar] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handlePay = () => {
    alert(`Processing ₹${amount} payment for Aadhaar ${aadhaar}`);
    router.push('/'); // redirect to home after alert
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
      <div className="bg-white dark:bg-[#111] p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Aadhaar Payment
        </h1>

        <input
          type="text"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
          maxLength={12}
          placeholder="Enter Aadhaar Number"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-lg text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount (₹)"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-lg text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
        />

        <button
          onClick={handlePay}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-semibold transition"
        >
          Proceed to Pay
        </button>
      </div>
    </main>
  );
}
