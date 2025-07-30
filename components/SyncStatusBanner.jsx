// components/SyncStatusBanner.jsx

export default function SyncStatusBanner({ status }) {
  const statusMap = {
    idle: { msg: 'Ready to sync your offline data.', color: 'text-blue-500' },
    syncing: { msg: 'Sync in progress...', color: 'text-yellow-500' },
    success: { msg: 'Sync successful! ✅', color: 'text-green-500' },
    failed: { msg: 'Sync failed. Please try again. ❌', color: 'text-red-500' },
  };

  return (
    <div
      className={`max-w-md mx-auto p-4 rounded-xl shadow border bg-white dark:bg-[#1b1b1b] border-gray-200 dark:border-gray-700 ${statusMap[status]?.color}`}
    >
      <p className="text-md font-medium">{statusMap[status]?.msg}</p>
    </div>
  );
}
