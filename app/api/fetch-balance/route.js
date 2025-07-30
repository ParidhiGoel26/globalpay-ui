// app/api/fetch-balance/route.js

export async function GET() {
  return new Response(
    JSON.stringify({
      balance: 2450.75,
      currency: 'INR',
      transactions: [
        { id: 1, title: 'Local Grocery', amount: -120, date: '2025-07-28' },
        { id: 2, title: 'Wallet Top-up', amount: 500, date: '2025-07-27' },
        { id: 3, title: 'Metro Recharge', amount: -60, date: '2025-07-26' },
      ],
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
