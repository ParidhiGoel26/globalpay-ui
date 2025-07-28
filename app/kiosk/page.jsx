"use client";
import BiometricPrompt from "@/components/BiometricPrompt";
import { motion } from "framer-motion";

export default function KioskPage() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        GlobalPay Kiosk
      </motion.h1>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button className="bg-green-600 text-white text-2xl px-8 py-4 rounded-xl">
          Scan QR to Pay
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <BiometricPrompt />
      </motion.div>
    </motion.main>
  );
}
