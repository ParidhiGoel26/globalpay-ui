// components/WalletCard.jsx
export default function WalletCard({ balance }) {
  return (
    <div className="p-6 bg-blue-600 text-white rounded-xl shadow-xl">
      <h2 className="text-xl">Wallet Balance</h2>
      <p className="text-3xl font-bold mt-2">₹{balance}</p>
    </div>
  );
}
