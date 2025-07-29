"use client";
import BiometricPrompt from "@/components/BiometricPrompt";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

export default function KioskPage() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Fingerprint className="w-8 h-8" /> GlobalPay Kiosk
      </motion.h1>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(34,197,94,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white text-2xl px-8 py-4 rounded-xl shadow-md relative overflow-hidden"
        >
          <span className="z-10 relative">Scan QR to Pay</span>
          <span className="absolute inset-0 bg-white opacity-10 rounded-xl animate-ping" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BiometricPrompt animatePulse />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
