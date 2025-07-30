// app/api/verify-biometric/route.js

export async function POST(request) {
  const { aadhaarNumber, fingerprintHash } = await request.json();

  if (!aadhaarNumber || !fingerprintHash) {
    return new Response(
      JSON.stringify({ message: 'Missing Aadhaar or fingerprint data' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Simulate verification delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const isValid = Math.random() > 0.1; // 90% chance of success

  if (isValid) {
    return new Response(JSON.stringify({ verified: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ verified: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
