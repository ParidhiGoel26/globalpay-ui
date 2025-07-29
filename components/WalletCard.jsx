"use client";
import { motion } from "framer-motion";

export default function WalletCard({ balance = "₹0", name = "User" }) {
  return (
    <motion.div
      className="mx-auto max-w-md bg-gradient-to-br from-purple-400 to-purple-200 text-white p-8 rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-lg">Wallet Balance</div>
      <div className="text-4xl font-bold mt-2">{balance}</div>
      <div className="mt-4 text-sm">Holder: {name}</div>
    </motion.div>
  );
}
