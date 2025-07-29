'use client';
import Image from 'next/image';

const solutions = [
  {
    title: 'Offline Biometric Payments',
    desc: 'Enable secure offline transactions in rural or low-connectivity areas using fingerprint-based biometric devices. Perfect for micro-merchants and government schemes requiring instant identity verification without internet.',
    img: '/offline-payments.jpg',
    href: '#',
  },
  {
    title: 'Aadhaar Authentication',
    desc: 'Leverage UIDAI APIs to perform real-time Aadhaar-based identity checks for seamless onboarding, KYC, and fraud prevention across various financial and e-governance platforms.',
    img: '/aadhaar-auth.jpg',
    href: '#',
  },
  {
    title: 'QR/UPI',
    desc: 'Accept payments via Bharat QR or UPI with a single scan. Our platform ensures fast, secure, and interoperable transactions with minimal effort for customers and merchants alike.',
    img: '/qr-upi.jpg',
    href: '#',
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f] text-black dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">
        Our Payment Solutions
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {solutions.map((sol, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition overflow-hidden max-w-sm w-full flex flex-col h-[440px]"
          >
            <Image
              src={sol.img}
              alt={sol.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-semibold mb-2">{sol.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{sol.desc}</p>
              </div>
              <a
                href={sol.href}
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm"
              >
                Check out more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
