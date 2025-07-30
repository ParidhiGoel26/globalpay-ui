"use client";

import React from "react";
import WalletCard from "@/components/WalletCard";
import TransactionHistory from "@/components/TransactionHistory";
import apiClient from "@/utils/apiClient";
import { motion } from "framer-motion";

export default function WalletPage() {
  const [balance, setBalance] = React.useState(0);
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await apiClient("/api/fetch-balance");
      setBalance(res?.balance || 0);
      setTransactions(res?.transactions || []);
    }
    fetchData();
  }, []);

  return (
    <motion.main
      className="min-h-screen px-6 py-10 bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f] text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Wallet Overview
      </motion.h1>

      <div className="mb-8 flex justify-center">
        <WalletCard balance={balance} />
      </div>

      <TransactionHistory
        transactions={transactions}
        itemVariant={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        animateItems
      />
    </motion.main>
  );
}
