'use client';

export default function AadhaarForm({ aadhaar, setAadhaar }) {
  return (
    <input
      type="number"
      value={aadhaar}
      onChange={(e) => setAadhaar(e.target.value.slice(0, 12))}
      placeholder="Enter 12-digit Aadhaar Number"
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-black dark:text-white rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
    />
  );
}
