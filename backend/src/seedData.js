const mongoose = require('mongoose');
const Job = require('./models/Job');
require('dotenv').config();

const seedJobs = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description: "We are looking for a Senior Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies.",
    type: "full-time",
    salary: "$120,000 - $150,000",
    requirements: [
      "5+ years experience in full-stack development",
      "Proficiency in React, Node.js, and MongoDB",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
      "Professional development budget"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    description: "Join our innovative startup as a Frontend Developer! You'll work on cutting-edge web applications and contribute to our user-centric design philosophy.",
    type: "remote",
    salary: "$80,000 - $100,000",
    requirements: [
      "3+ years experience with React/Vue.js",
      "Strong CSS and HTML skills",
      "Experience with responsive design",
      "Knowledge of modern development tools"
    ],
    benefits: [
      "Remote work",
      "Equity options",
      "Flexible schedule",
      "Learning stipend"
    ]
  },
  {
    title: "Data Analyst",
    company: "DataMinds Analytics",
    location: "Chicago, IL",
    description: "We're seeking a Data Analyst to help transform raw data into actionable insights. You'll work with large datasets and create visualizations to support business decisions.",
    type: "full-time",
    salary: "$70,000 - $90,000",
    requirements: [
      "2+ years experience in data analysis",
      "Proficiency in Python, SQL, and Excel",
      "Experience with data visualization tools",
      "Strong analytical thinking"
    ],
    benefits: [
      "Health and dental insurance",
      "Retirement plan",
      "Professional development",
      "Team building activities"
    ]
  },
  {
    title: "UX/UI Designer",
    company: "DesignHub Studio",
    location: "Austin, TX",
    description: "Creative UX/UI Designer needed to create intuitive and beautiful user experiences. You'll collaborate with developers and product managers to bring designs to life.",
    type: "part-time",
    salary: "$50,000 - $70,000",
    requirements: [
      "3+ years experience in UX/UI design",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Portfolio showcasing design process",
      "Understanding of user-centered design principles"
    ],
    benefits: [
      "Flexible hours",
      "Creative freedom",
      "Design tool subscriptions",
      "Conference attendance"
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jobboard');
    
    // Clear existing data
    await Job.deleteMany({});
    console.log('Cleared existing jobs');
    
    // Insert seed data
    await Job.insertMany(seedJobs);
    console.log('Seed data inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jobboard');
    
    // Clear existing data
    await Job.deleteMany({});
    console.log('Cleared existing jobs');
    
    // Insert seed data
    await Job.insertMany(seedJobs);
    console.log('Seed data inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
