'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Harshita Bisht',
    role: 'Frontend Engineer',
    focus: 'Offline Sync, About, Mock API, Theme Support',
    image: '/Team/harshita.jpg',
  },
  {
    name: 'Paridhi Goel',
    role: 'Frontend Engineer',
    focus: 'Homepage, Onboarding, Biometric Payment, Solutions, Contact',
    image: '/Team/paridhi.jpg',
  },
  {
    name: 'Ojaswee',
    role: 'Frontend Engineer',
    focus: 'Wallet, Merchant Dashboard, Kiosk, Technology',
    image: '/Team/ojaswee.jpg',
  },
];

export default function TeamSection() {
  return (
    <section >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#1b1b1b] border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500"
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-400 dark:border-purple-500 mx-auto mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 text-center">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              {member.role}
            </p>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-300 text-center">
              {member.focus}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
