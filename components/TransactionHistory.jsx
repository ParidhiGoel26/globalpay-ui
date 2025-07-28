
export default function TransactionHistory({ transactions }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
      <ul className="space-y-2">
        {transactions.map((txn, idx) => (
          <li key={idx} className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <span>{txn.date}</span>
            <span>{txn.description}</span>
            <span className="font-semibold">₹{txn.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
