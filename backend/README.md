# Job Board Backend API

Node.js/Express backend for the CareerBoost Job Board application.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jobboard
NODE_ENV=development
```

### 3. Start MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas.

### 4. Seed Database
```bash
npm run seed
```

### 5. Start Server
```bash
npm run dev
```

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/jobs` | Get all jobs |
| GET | `/api/jobs/:id` | Get specific job |
| POST | `/api/applications` | Submit application |
| GET | `/api/applications` | Get all applications |
| GET | `/api/health` | Health check |

## 🧪 Testing

```bash
# Test health endpoint
curl https://altibbe-ba.vercel.app/api/health

# Test jobs endpoint
curl https://altibbe-ba.vercel.app/api/jobs

# Test with filters
curl "https://altibbe-ba.vercel.app/api/jobs?type=remote&location=Remote"
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── models/
│   │   ├── Job.js
│   │   └── Application.js
│   ├── routes/
│   │   ├── jobRoutes.js
│   │   └── applicationRoutes.js
│   ├── server.js
│   └── seedData.js
├── .env
├── package.json
└── README.md
```

## 🔧 Scripts

- `npm start` - Production server
- `npm run seed` - Seed database
