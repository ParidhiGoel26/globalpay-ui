'use client';

import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen px-6 py-12 text-center bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-8">
          About GlobalPay 🚀
        </h1>

        <section className="max-w-4xl mx-auto mb-16 bg-white dark:bg-[#1b1b1b] p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            At GlobalPay, we aim to democratize access to digital payments using biometric and Aadhaar-based authentication. Our platform empowers individuals and merchants to transact securely, even in areas with limited internet connectivity.
          </p>
        </section>

        <section className="max-w-4xl mx-auto mb-16 bg-white dark:bg-[#1b1b1b] p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Why GlobalPay?</h2>
          <ul className="text-gray-700 dark:text-gray-300 text-base space-y-2 list-disc list-inside text-left">
            <li>Secure biometric and Aadhaar-based onboarding</li>
            <li>Offline-first transactions for rural connectivity</li>
            <li>Merchant-focused dashboards and wallet UIs</li>
            <li>Compliance with Indian digital identity infrastructure</li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">Meet the Team 👥</h2>
          <TeamSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
