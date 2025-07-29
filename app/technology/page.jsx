"use client";
import { motion } from "framer-motion";
import { Cpu, Fingerprint, ShieldCheck } from "lucide-react";

const techFeatures = [
  {
    icon: <Fingerprint className="w-8 h-8 text-green-500" />,
    title: "Biometric Authentication",
    desc: "Secure biometric verification for seamless and fast payments.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "AI-Powered Fraud Detection",
    desc: "Smart detection algorithms for real-time fraud prevention.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
    title: "End-to-End Encryption",
    desc: "Data protected with industry-grade encryption at every step.",
  },
];

export default function TechnologyPage() {
  return (
    <motion.main
      className="min-h-screen px-6 py-10 bg-white dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Powered by Technology
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {techFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-xl bg-gray-100 dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
