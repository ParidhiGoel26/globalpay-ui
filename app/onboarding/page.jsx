'use client';

import { useState } from 'react';
import AadhaarForm from '@/components/AadhaarForm';

export default function OnboardingPage() {
  const [aadhaar, setAadhaar] = useState('');

  const handleVerify = () => {
    alert(`Verifying Aadhaar: ${aadhaar}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
      <div className="bg-white dark:bg-[#111] p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Aadhaar Onboarding
        </h1>

        <AadhaarForm aadhaar={aadhaar} setAadhaar={setAadhaar} />

        <button
          onClick={handleVerify}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-semibold transition"
        >
          Verify Biometric
        </button>
      </div>
    </main>
  );
}
