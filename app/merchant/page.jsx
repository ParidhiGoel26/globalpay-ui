"use client";
import React from "react";
import { motion } from "framer-motion";
import BiometricPrompt from "@/components/BiometricPrompt";
import TransactionHistory from "@/components/TransactionHistory";
import apiClient from "@/utils/apiClient";

export default function MerchantDashboard() {
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    async function fetchTransactions() {
      const res = await apiClient("/api/fetch-balance");
      setTransactions(res?.transactions || []);
    }
    fetchTransactions();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-semibold text-center mb-6 text-green-600 dark:text-green-400"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Merchant Dashboard
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <BiometricPrompt animatePulse />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8"
      >
        <TransactionHistory
          transactions={transactions}
          itemVariant={item}
          animateItems
        />
      </motion.div>
    </motion.main>
  );
}
