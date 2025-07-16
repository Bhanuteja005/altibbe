import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-company">{job.company}</div>
      <div className="job-location">📍 {job.location}</div>
      <div className={`job-type ${job.type}`}>
        {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
      </div>
      <p className="job-description">{job.description}</p>
      {job.salary && (
        <div className="job-salary">💰 {job.salary}</div>
      )}
      <div className="job-actions">
        <Link to={`/jobs/${job._id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
