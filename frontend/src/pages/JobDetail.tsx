import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Job } from '../types';
import { jobsApi } from '../services/api';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchJob(id);
    }
  }, [id]);

  const fetchJob = async (jobId: string) => {
    try {
      setLoading(true);
      const jobData = await jobsApi.getJob(jobId);
      setJob(jobData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch job details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container">Loading job details...</div>;
  if (error) return <div className="container">Error: {error}</div>;
  if (!job) return <div className="container">Job not found</div>;

  return (
    <div className="container">
      <div className="job-detail">
        <div className="job-header">
          <h1 className="job-title">{job.title}</h1>
          <div className="job-company">{job.company}</div>
          <div className="job-meta">
            <div className="job-meta-item">
              <span>📍</span>
              <span>{job.location}</span>
            </div>
            <div className="job-meta-item">
              <span>💼</span>
              <span className={`job-type ${job.type}`}>
                {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
              </span>
            </div>
            {job.salary && (
              <div className="job-meta-item">
                <span>💰</span>
                <span>{job.salary}</span>
              </div>
            )}
          </div>
        </div>

        <div className="job-section">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        {job.requirements && job.requirements.length > 0 && (
          <div className="job-section">
            <h3>Requirements</h3>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {job.benefits && job.benefits.length > 0 && (
          <div className="job-section">
            <h3>Benefits</h3>
            <ul>
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="job-actions">
          <Link to={`/jobs/${job._id}/apply`} className="btn btn-primary">
            Apply Now
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back to Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
