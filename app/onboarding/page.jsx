'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AadhaarForm from '@/components/AadhaarForm';

export default function OnboardingPage() {
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const handleVerify = () => {
    if (aadhaar.length !== 12) {
      alert('Please enter a valid 12-digit Aadhaar number.');
      return;
    }
    setShowOtp(true);
  };

  const handleOtpSubmit = () => {
    if (otp === '123456') {
      alert('Biometric Verified');
      router.push(`/payment?aadhaar=${aadhaar}`);
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
      <div className="bg-white dark:bg-[#111] p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Aadhaar Onboarding
        </h1>

        <AadhaarForm aadhaar={aadhaar} setAadhaar={setAadhaar} />

        {!showOtp && (
          <button
            onClick={handleVerify}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-semibold transition"
          >
            Verify Biometric
          </button>
        )}

        {showOtp && (
          <>
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-3 mt-4 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-lg text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleOtpSubmit}
              className="w-full  bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-semibold transition"
            >
              Submit OTP
            </button>
          </>
        )}
      </div>
    </main>
  );
}
