"use client";
import { motion } from "framer-motion";

export default function TransactionHistory({ transactions = [], animateItems = false, itemVariant }) {
  return (
    <div className="mx-auto max-w-lg mt-4 space-y-4">
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions found.</p>
      ) : (
        <motion.ul
          initial={animateItems ? "hidden" : false}
          animate={animateItems ? "show" : false}
          variants={animateItems ? { show: { transition: { staggerChildren: 0.1 } } } : {}}
          className="space-y-3"
        >
          {transactions.map((tx, idx) => (
            <motion.li
              key={idx}
              variants={itemVariant}
              className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <span>{tx.description || "Payment"}</span>
              <span className="font-semibold text-green-600 dark:text-green-400">₹{tx.amount}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
