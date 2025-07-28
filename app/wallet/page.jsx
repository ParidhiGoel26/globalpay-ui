
"use client";
import WalletCard from "@/components/WalletCard";
import TransactionHistory from "@/components/TransactionHistory";
import { useEffect, useState } from "react";
import apiClient from "@/utils/apiClient";
import { motion } from "framer-motion";

export default function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await apiClient("/api/fetch-balance");
      setBalance(data?.balance || 0);
      setTransactions(data?.transactions || []);
    }
    fetchData();
  }, []);

  return (
    <motion.main
      className="min-h-screen px-4 py-8 bg-white dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Your Wallet
      </motion.h1>
      <WalletCard balance={balance} />
      <motion.div
        className="my-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">Scan QR</button>
      </motion.div>
      <TransactionHistory transactions={transactions} />
    </motion.main>
  );
}
