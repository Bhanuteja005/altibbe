# Job Board Frontend

React TypeScript frontend for the CareerBoost Job Board application.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📋 Features

- **Job Listings**: Browse and filter jobs
- **Job Details**: View detailed job information
- **Application Form**: Submit job applications
- **Admin Dashboard**: View submitted applications
- **Responsive Design**: Mobile-friendly interface

## 🧪 Testing

Make sure the backend is running on `http://localhost:5000` before starting the frontend.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── JobCard.tsx
│   │   └── JobFilters.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── JobDetail.tsx
│   │   ├── ApplicationForm.tsx
│   │   └── AdminDashboard.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
└── README.md
```

## 🔧 Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🌐 Pages

- `/` - Home page with job listings
- `/jobs/:id` - Job detail page
- `/jobs/:id/apply` - Application form
- `/admin` - Admin dashboard
