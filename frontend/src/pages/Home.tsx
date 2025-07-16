import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import JobFilters from '../components/JobFilters';
import { Job, JobFilters as JobFiltersType } from '../types';
import { jobsApi } from '../services/api';

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<JobFiltersType>({});

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const jobsData = await jobsApi.getJobs(filters);
      setJobs(jobsData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch jobs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: JobFiltersType) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Find Your Dream Job</h1>
        <p>Discover opportunities that match your skills and interests</p>
      </div>
      
      <JobFilters filters={filters} onFilterChange={handleFilterChange} />
      
      {loading && <div className="loading">Loading jobs...</div>}
      {error && <div className="error">{error}</div>}
      
      {!loading && !error && (
        <>
          <div className="results-count">
            {jobs.length} job{jobs.length !== 1 ? 's' : ''} found
          </div>
          
          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
          
          {jobs.length === 0 && (
            <div className="no-jobs">
              <p>No jobs match your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
