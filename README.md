# 🌐 GlobalPay UI

A modern and secure frontend prototype for a biometric/Aadhaar-based digital payment system, built with **Next.js** and **Tailwind CSS**. This project includes mock interfaces for wallet management, merchant dashboards, biometric payments, and offline sync.

---

## 🚀 Features

- 🔐 **User Onboarding** (Biometric / Aadhaar)
- 💳 **Wallet Interface** (Balance, QR Scan, History)
- 👆 **Biometric Payment Flow**
- 🧾 **Merchant Dashboard**
- 📡 **Offline Sync Interface**
- 🖥️ Optional **Kiosk View** for public payment booths
- ⚙️ **Mock API server** using Next.js API routes (FastAPI/Node.js alternative)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Design:** Figma (prototypes)
- **Mock Backend:** Next.js API routes

---

## 🧩 Folder Structure
```
globalpay-ui/
├── app/
│   ├── layout.jsx               # Root layout with dark/light support, fonts, meta
│   ├── globals.css              # Tailwind + custom styles
│   ├── page.jsx                 # Homepage with overview or CTA
│
│   ├── onboarding/              # Aadhaar/biometric onboarding screens
│   │   └── page.jsx
│
│   ├── wallet/                  # Wallet UI: balance, QR scan, history
│   │   └── page.jsx
│
│   ├── payment/                 # Biometric prompt & transaction confirmation
│   │   └── page.jsx
│
│   ├── merchant/                # Merchant dashboard
│   │   └── page.jsx
│
│   ├── offline-sync/           # Offline data sync UI
│   │   └── page.jsx
│
│   ├── kiosk/                  # Optional: Kiosk-style screens (for public booths)
│   │   └── page.jsx
│
│   ├── api/                    # Mock APIs (Next.js API routes)
│   │   ├── verify-biometric/route.js
│   │   ├── sync-wallet/route.js
│   │   └── fetch-balance/route.js
│
├── components/                 # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── BiometricPrompt.jsx
│   ├── WalletCard.jsx
│   ├── TransactionHistory.jsx
│   ├── AadhaarForm.jsx
│   └── SyncStatusBanner.jsx
│
├── public/                     # Static assets like logo, icons
│   ├── logo.png
│   └── qr-placeholder.svg
│
├── styles/                     # Custom styles (optional)
│   └── animations.css
│
├── utils/                      # Utility functions
│   └── apiClient.js            # Fetch wrapper for mock APIs
│
├── .gitignore
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── next.config.js
```
## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/globalpay-ui.git
cd globalpay-ui

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
