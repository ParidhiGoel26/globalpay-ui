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
- **UI Design:** Figma (prototypes) [Figma file](https://www.figma.com/design/gMTiwBvGMVQGknEmh2Rqqk/Untitled?node-id=0-1&t=YlERYanpaXjQbPX3-1)
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
git clone https://github.com/ParidhiGoel26/globalpay-ui.git
cd globalpay-ui

# 2. Install dependencies
npm install
npm install lucide-react

# 3. Run the development server
npm run dev
```
App runs on http://localhost:3000
## 📄 Pages
1. page.jsx (Landing Page)

Purpose: Welcome screen for GlobalPay.

2. solutions /Page.jsx
   
Purpose: Describe different payment solutions GlobalPay offers.

Example Content:
Offline biometric payments
Aadhaar authentication use-cases
QR & UPI integration

3. technology /Page.jsx

Purpose: Showcase tech stack and security of GlobalPay.

Example Content:
Device compatibility
Encryption techniques
Server-side logic (overview)

4. about/ Page.jsx

Purpose: Introduce the mission, vision, and team behind GlobalPay.

Sections May Include:
Our Mission
Why GlobalPay
Meet the Team (uses TeamSection.jsx)

5. contact /Page.jsx

Purpose: Contact form to collect feedback or queries.

Includes:
Name, Email, Message
ContactForm.jsx component
SocialLinks.jsx at the bottom

## 🙌 Contribution
Each intern will be assigned a specific folder. Submit your progress via Pull Requests to the main branch.

## 📄 License
All rights reserved by Sentienta QualityAI. This project is part of an internal research initiative. Do not redistribute without permission.
