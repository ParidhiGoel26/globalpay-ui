// app/api/sync-wallet/route.js

export async function POST() {
  // Simulate network delay and sync result
  await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5s delay

  const success = Math.random() > 0.2; // 80% success rate

  if (success) {
    return new Response(JSON.stringify({ message: 'Sync successful' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Sync failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
