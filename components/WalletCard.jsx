import { motion } from "framer-motion";

export default function WalletCard({ balance = "₹12,450", name = "Ojaswee" }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-lg mb-1">Wallet Balance</div>
      <div className="text-3xl font-bold">{balance}</div>
      <div className="mt-4 text-sm">Holder: {name}</div>
    </motion.div>
  );
}
