'use client';

const features = [
  {
    title: 'Compatible with all Device that matter',
    description: [
      'Fingerprint scanners',
      'Android Devices (Online & Offline)',
      'Micro-ATMs and handheld terminals',
    ],
    image: '/fingerprint.jpg',
  },
  {
    title: 'End-To-End Encryption ,Always On',
    description: [
      'AES 256-bit encryption',
      'SHA-2 hashing for biometric templates',
      'UIDAI-compliant data handling protocols',
    ],
    image: '/encryption-key.jpg',
  },
  {
    title: 'Server-side infrastructure Built for Bharat',
    description: [
      'Stateless microservices for modular growth',
      'Edge caching for low latency in rural areas',
      'Real-time monitoring & analytics',
    ],
    image: '/cloud-secure.jpg',
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-16 transition-colors duration-500">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400">Built for Trust, Speed & Scale</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our technology stack ensures secure, seamless, and inclusive payments powered by Aadhaar and biometrics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-[#0F172A] text-black dark:text-white p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:shadow-xl transition duration-300"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-24 h-24 md:w-28 md:h-28 mb-6 mx-auto"
            />
            <h3 className="text-lg font-bold mb-2 text-center">{feature.title}</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {feature.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
