"use client";
import BiometricPrompt from "@/components/BiometricPrompt";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

export default function KioskPage() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-10 flex items-center gap-2 text-green-600 dark:text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Fingerprint className="w-8 h-8" /> GlobalPay Kiosk
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 dark:bg-green-500 text-white text-2xl px-8 py-4 rounded-xl shadow-lg"
      >
        Scan QR to Pay
      </motion.button>

      <div className="mt-10">
        <BiometricPrompt animatePulse />
      </div>
    </motion.main>
  );
}
