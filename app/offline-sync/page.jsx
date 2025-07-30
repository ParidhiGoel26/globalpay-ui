'use client';

import Footer from '@/components/Footer';
import SyncStatusBanner from '@/components/SyncStatusBanner';
import { useState } from 'react';

export default function OfflineSyncPage() {
  const [status, setStatus] = useState('idle');

  const handleSync = async () => {
    setStatus('syncing');
    try {
      const res = await fetch('/api/sync-wallet', { method: 'POST' });
      if (res.ok) {
        setStatus('success');
      } else {
        throw new Error();
      }
    } catch {
      setStatus('failed');
    }
  };

  return (
    <>
      <main className="min-h-screen px-6 py-12 text-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          Offline Sync 📡
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-800 dark:text-gray-200 mb-10">
          GlobalPay ensures uninterrupted digital transactions even in low-connectivity or rural areas. Merchants can accept payments offline, and sync them later when network becomes available.
        </p>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-4 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1b1b1b] p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                Step {index + 1}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{step}</p>
            </div>
          ))}
        </section>

        <section className="max-w-3xl mx-auto mb-12 text-left">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 text-center">
            Key Benefits
          </h2>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300 list-disc list-inside">
            <li>📶 No dependency on constant internet</li>
            <li>🔒 Secure local storage & encryption</li>
            <li>🔁 Auto-retry logic for syncing</li>
            <li>🧾 Transaction history shows pending vs synced record</li>
          </ul>
        </section>

        <SyncStatusBanner status={status} />

        <button
          onClick={handleSync}
          disabled={status === 'syncing'}
          className="mt-8 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-xl shadow-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'syncing' ? 'Syncing...' : 'Sync Now'}
        </button>
      </main>
    </>
  );
}

const steps = [
  'Capture biometric/Aadhaar input',
  'Save transaction locally with timestamp & encrypted data',
  'Queue it for sync',
  'Auto-sync when device is back online',
];
