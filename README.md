# CareerBoost Job Board

A full-stack job board application built with React (TypeScript) frontend and Node.js/Express backend with MongoDB.

## 🚀 Features

- **Job Listings**: Browse all available jobs with filtering
- **Job Details**: View detailed job information
- **Application Form**: Submit job applications
- **Admin Dashboard**: View all submitted applications
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- React 19 + TypeScript
- React Router for navigation
- Axios for API calls
- Responsive CSS

### Backend
- Node.js + Express
- MongoDB with Mongoose
- Joi for validation
- CORS enabled

## 📁 Project Structure

```
altibbe1/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   └── package.json
├── backend/           # Node.js backend API
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── server.js
│   │   └── seedData.js
│   └── package.json
└── README.md
```

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd altibbe1
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
echo PORT=5000 > .env
echo MONGODB_URI=mongodb://localhost:27017/jobboard >> .env
echo NODE_ENV=development >> .env
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

## 🎯 How to Run

### Step 1: Start MongoDB
Make sure MongoDB is running on your system:
- **Local MongoDB**: Start MongoDB service
- **MongoDB Atlas**: Ensure connection string is correct in `.env`

### Step 2: Seed the Database
```bash
# From backend directory
cd backend
npm run seed
```

You should see:
```
Connected to MongoDB
Cleared existing jobs
Seed data inserted successfully
```

### Step 3: Start Backend Server
```bash
# From backend directory
cd backend
npm run dev
```

You should see:
```
Connected to MongoDB
Server running on port 5000
```

### Step 4: Start Frontend Application
```bash
# From frontend directory (in a new terminal)
cd frontend
npm start
```

The application will open at `http://localhost:3000`

## 🌐 API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get specific job
- Query parameters: `?type=full-time&location=Remote&company=TechCorp`

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications` - Get all applications (admin)

### Health Check
- `GET /api/health` - API status

## 🧪 Testing the Application

### 1. Test Backend API
```bash
# Check if backend is running
curl http://localhost:5000/api/health

# Get all jobs
curl http://localhost:5000/api/jobs

# Or visit in browser:
# http://localhost:5000/api/jobs
```

### 2. Test Frontend
- Visit `http://localhost:3000`
- You should see job listings
- Click "View Details" to see job details
- Click "Apply Now" to submit applications
- Visit `/admin` to see applications

## 🔍 Troubleshooting

### No Jobs Displaying
1. **Check Backend**: Make sure backend server is running on port 5000
2. **Check Database**: Run `npm run seed` to populate jobs
3. **Check MongoDB**: Ensure MongoDB is running and accessible
4. **Check Console**: Look for errors in browser developer tools

### Common Issues
```bash
# MongoDB connection error
# Solution: Start MongoDB service or check connection string

# Port already in use
# Solution: Change port in .env file or kill process using the port

# Module not found errors
# Solution: Run npm install in both frontend and backend directories
```

### Frontend Issues
```bash
# If frontend doesn't start
cd frontend
npm install
npm start

# If API calls fail
# Check that backend is running on port 5000
# Check browser console for CORS errors
```

### Backend Issues
```bash
# If backend doesn't start
cd backend
npm install
npm run dev

# If database connection fails
# Check MongoDB is running
# Check .env file configuration
```

## 📝 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🎨 Sample Data

The application comes with 4 sample jobs:
- Senior Full Stack Developer (TechCorp Inc.)
- Frontend Developer (StartupXYZ)
- Data Analyst (DataMinds Analytics)
- UX/UI Designer (DesignHub Studio)

## 📱 Usage

1. **Browse Jobs**: Visit homepage to see all available jobs
2. **Filter Jobs**: Use filters to find specific jobs
3. **View Details**: Click on any job to see full details
4. **Apply**: Click "Apply Now" to submit your application
5. **Admin Panel**: Visit `/admin` to view all applications

## 🔐 Environment Variables

Create `.env` file in backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jobboard
NODE_ENV=development
```

## 🚢 Deployment

### Backend
- Deploy to Heroku, Railway, or AWS
- Set environment variables in deployment platform
- Use MongoDB Atlas for production database

### Frontend
- Build: `npm run build`
- Deploy to Netlify, Vercel, or AWS S3
- Update API base URL for production

## 📄 License

This project is licensed under the MIT License.
