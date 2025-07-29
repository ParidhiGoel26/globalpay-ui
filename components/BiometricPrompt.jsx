"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Fingerprint, CheckCircle, XCircle } from "lucide-react";

export default function BiometricPrompt({ animatePulse = false }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (animatePulse) {
      setStatus("scanning");
      const timeout = setTimeout(() => {
        setStatus(Math.random() > 0.3 ? "success" : "failed");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [animatePulse]);

  const iconMap = {
    idle: <Fingerprint className="w-16 h-16 text-purple-600" />,
    scanning: <Fingerprint className="w-16 h-16 text-purple-600 animate-pulse" />,
    success: <CheckCircle className="w-16 h-16 text-green-600" />,
    failed: <XCircle className="w-16 h-16 text-red-600" />,
  };
  const textMap = {
    idle: "Tap to scan fingerprint",
    scanning: "Scanning...",
    success: "Biometric Verified",
    failed: "Scan failed. Try again",
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {iconMap[status]}
      <p className="text-lg font-medium">{textMap[status]}</p>
    </motion.div>
  );
}
