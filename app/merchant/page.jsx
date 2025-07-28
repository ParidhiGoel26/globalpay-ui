"use client";
import BiometricPrompt from "@/components/BiometricPrompt";
import TransactionHistory from "@/components/TransactionHistory";
import { useState, useEffect } from "react";
import apiClient from "@/utils/apiClient";
import { motion } from "framer-motion";

export default function MerchantDashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const data = await apiClient("/api/fetch-balance");
      setTransactions(data?.transactions || []);
    }
    fetchTransactions();
  }, []);

  return (
    <motion.main
      className="min-h-screen px-6 py-10 bg-white dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Merchant Dashboard
      </motion.h1>
      <motion.div
        className="my-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <BiometricPrompt />
      </motion.div>
      <TransactionHistory transactions={transactions} />
    </motion.main>
  );
}