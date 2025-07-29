"use client";
import WalletCard from "@/components/WalletCard";
import TransactionHistory from "@/components/TransactionHistory";
import { useEffect, useState } from "react";
import apiClient from "@/utils/apiClient";
import { motion } from "framer-motion";

export default function WalletPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetch() {
      const res = await apiClient("/api/fetch-balance");
      setTransactions(res?.transactions || []);
    }
    fetch();
  }, []);

  return (
    <motion.main
      className="min-h-screen px-6 py-10 bg-white dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-semibold text-center mb-6 text-green-600 dark:text-green-400">Your Wallet</h1>
      <WalletCard />
      <TransactionHistory transactions={transactions} />
    </motion.main>
  );
}
