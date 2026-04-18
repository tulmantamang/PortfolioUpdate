# 🚀 Creative Developer Portfolio 2026

A high-performance, minimalist, and visually stunning MERN stack portfolio designed for the modern web. Built with a focus on **Visual Excellence**, **Performance**, and **Clean Architecture**.

![Banner](https://github.com/tulmantamang/PortfolioUpdate/raw/main/apps/frontend/public/profile.jpg)

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & 3D elements via [Three.js](https://threejs.org/)
- **Icons**: React Icons (Fi)
- **State Management**: React Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Security**: Helmet, Express-Rate-Limit
- **Mailing**: Nodemailer (SMTP)
- **Validation**: Zod

### Infrastructure
- **Monorepo**: [Turborepo](https://turbo.build/)
- **Language**: TypeScript (End-to-end)

## ✨ Key Features
- **App-like Navigation**: Thumb-friendly bottom navigation for mobile users.
- **Glassmorphic Design**: Sleek, modern dark mode with subtle micro-interactions.
- **Centralized Config**: Manage all personal data (Email, Socials, Resume) from a single `personal.ts` file.
- **Optimized Performance**: Lazy-loading 3D scenes and optimized bundle size.
- **Contact System**: Fully functional backend to capture leads and send email notifications.

## 📂 Project Structure
```text
Portfolio/
├── apps/
│   ├── frontend/     # Next.js Application
│   └── backend/      # Express API (Contact Management)
├── shared/           # Common TypeScript interfaces
└── turbo.json        # Monorepo configuration
```

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/tulmantamang/PortfolioUpdate.git

# Install dependencies from root
npm install
```

### 3. Environment Setup
Create a `.env` file in `apps/backend/` based on `.env.example`:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
MAIL_USER=your_email
MAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=your_email
```

### 4. Running Locally
```bash
# Start both frontend and backend in parallel
npm run dev
```

## 📄 License
This project is open-source and available under the MIT License.

---
Built with ❤️ by [Tulman Tamang](https://github.com/tulmantamang)
