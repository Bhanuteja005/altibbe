# CareerBoost Job Board

A full-stack job board application built with React (TypeScript) frontend and Node.js/Express backend with MongoDB.

## Features

- **Job Listings**: Browse all available jobs with filtering by type, location, and company
- **Job Details**: View detailed job information including requirements and benefits
- **Application Form**: Submit applications with client-side validation
- **Admin Dashboard**: View all submitted applications
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

### Backend
- Node.js + Express
- MongoDB with Mongoose
- Joi for validation
- CORS enabled

### Frontend
- React 19 + TypeScript
- React Router for navigation
- Axios for API calls
- Responsive CSS Grid/Flexbox

## Project Structure

```
altibbe1/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── Job.js
│   │   │   └── Application.js
│   │   ├── routes/
│   │   │   ├── jobRoutes.js
│   │   │   └── applicationRoutes.js
│   │   ├── server.js
│   │   └── seedData.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── JobCard.tsx
│   │   │   └── JobFilters.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── JobDetail.tsx
│   │   │   ├── ApplicationForm.tsx
│   │   │   └── AdminDashboard.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/jobboard
   NODE_ENV=development
   ```

4. **Start MongoDB:**
   Make sure MongoDB is running locally or update the connection string for MongoDB Atlas.

5. **Seed the database:**
   ```bash
   npm run seed
   ```

6. **Start the backend server:**
   ```bash
   npm run dev
   ```

   The backend will be available at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs (with optional filtering)
- `GET /api/jobs/:id` - Get specific job details

### Applications
- `POST /api/applications` - Submit job application
- `GET /api/applications` - Get all applications (admin)

### Query Parameters for Jobs
- `type` - Filter by job type (full-time, part-time, remote, contract)
- `location` - Filter by location (partial match)
- `company` - Filter by company name (partial match)

## Database Schema

### Jobs Collection
```javascript
{
  _id: ObjectId,
  title: String,
  company: String,
  location: String,
  description: String,
  type: String, // full-time, part-time, remote, contract
  salary: String,
  requirements: [String],
  benefits: [String],
  createdAt: Date
}
```

### Applications Collection
```javascript
{
  _id: ObjectId,
  job_id: ObjectId, // Reference to Job
  name: String,
  email: String,
  resume_link: String,
  cover_letter: String,
  phone: String,
  createdAt: Date
}
```

## Features Implemented

### Core Requirements ✅
- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React + TypeScript
- **API Endpoints**: All required endpoints implemented
- **Database**: Jobs and Applications collections with seed data
- **UI Pages**: Home, Job Detail, Application Form
- **Responsive Design**: Mobile-friendly interface

### Bonus Features ✅
- **Client-side Validation**: Form validation with error messages
- **Admin Dashboard**: View all applications
- **Job Filtering**: Filter by type, location, and company
- **Modern UI**: Clean design with hover effects and animations

## Usage

1. **Browse Jobs**: Visit the home page to see all available jobs
2. **Filter Jobs**: Use the filter controls to narrow down job listings
3. **View Details**: Click "View Details" to see full job information
4. **Apply**: Click "Apply Now" to submit an application
5. **Admin Panel**: Visit `/admin` to view all applications

## Development

### Adding New Features
1. Backend: Add new routes in `src/routes/`
2. Frontend: Add new components in `src/components/` or pages in `src/pages/`
3. Update TypeScript types in `src/types/index.ts`

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests (if implemented)
cd backend
npm test
```

## Deployment

### Backend Deployment
1. Set up MongoDB Atlas or use a cloud MongoDB service
2. Update environment variables for production
3. Deploy to platforms like Heroku, Railway, or AWS

### Frontend Deployment
1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy to platforms like Netlify, Vercel, or AWS S3

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
