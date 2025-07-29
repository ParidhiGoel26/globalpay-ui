'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/fingerprint.jpg',
    title: 'Compatible with all Device that matter',
    desc: 'GlobalPay works seamlessly across Biometric Devices, Mobile Phones and POS systems. Our Platform integrates with:',
    points: [
      'Fingerprint scanners',
      'Android Devices (Online & Offline)',
      'Micro-ATMs and handheld terminals',
    ],
  },
  {
    icon: '/encryption-key.jpg',
    title: 'End-To-End Encryption ,Always On',
    desc: 'Every Aadhaar request, Biometric scan and transaction is protected using:',
    points: [
      'AES 256-bit encryption',
      'SHA-2 hashing for Biometric templates',
      'UIDAI-compliant data handling protocols',
    ],
  },
  {
    icon: '/cloud-secure.jpg',
    title: 'Server-side infrastructure Built for Bharat',
    desc: 'Our Backend is Built to support Aadhaar-based Auth + Payments reliably. Core features include:',
    points: [
      'Stateless microservices for modular scaling',
      'Edge caching for low-latency in rural areas',
      'Real-time monitoring & analytics',
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-24 bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-6">
        Built for Trust , Speed & Scale
      </h2>
      <p className="text-center text-gray-800 dark:text-gray-300 max-w-3xl mx-auto mb-16">
        Our technology stack ensures secure, seamless , and inclusive payments powered by Aadhaar and biometrics
      </p>

      <div className="flex flex-col gap-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1b1b1b] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-6 md:items-start"
          >
            <div className="flex-shrink-0">
              <Image src={feature.icon} alt={feature.title} width={80} height={80} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{feature.desc}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-400">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
