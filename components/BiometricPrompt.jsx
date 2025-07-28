
"use client";
import { useState } from "react";

export default function BiometricPrompt() {
  const [status, setStatus] = useState("idle");

  async function handleVerify() {
    setStatus("verifying");
    const res = await fetch("/api/verify-biometric");
    const data = await res.json();
    setStatus(data.success ? "success" : "failed");
  }

  return (
    <div className="p-4 border rounded-md text-center">
      <h4 className="text-xl font-semibold mb-4">Biometric Verification</h4>
      <button
        onClick={handleVerify}
        className="px-6 py-2 bg-blue-700 text-white rounded-xl"
      >
        {status === "verifying" ? "Verifying..." : "Verify Fingerprint"}
      </button>
      {status === "success" && <p className="text-green-500 mt-2">Verified!</p>}
      {status === "failed" && <p className="text-red-500 mt-2">Verification Failed</p>}
    </div>
  );
}
