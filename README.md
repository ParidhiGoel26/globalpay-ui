# globalpay-ui
# Overview

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
