import React, { useState, useEffect, useCallback } from 'react';
import JobCard from '../components/JobCard';
import JobFilters from '../components/JobFilters';
import { Job, JobFilters as JobFiltersType } from '../types';
import { jobsApi } from '../services/api';

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<JobFiltersType>({});
  const [searchQuery, setSearchQuery] = useState('');

  const fetchJobs = useCallback(async () => {
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
  }, [filters]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleFilterChange = (newFilters: JobFiltersType) => {
    setFilters(newFilters);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Dream Job in the Future
            </h1>
            <p className="hero-subtitle">
              Discover cutting-edge opportunities with top companies. 
              Your next career breakthrough awaits in our futuristic job marketplace.
            </p>
            
            {/* Hero Search */}
            <div className="hero-search">
              <input
                type="text"
                placeholder="🚀 Search for jobs, companies, or dream roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <h3>{jobs.length}</h3>
                <p>Active Opportunities</p>
              </div>
              <div className="stat-card">
                <h3>500+</h3>
                <p>Tech Companies</p>
              </div>
              <div className="stat-card">
                <h3>10K+</h3>
                <p>Success Stories</p>
              </div>
              <div className="stat-card">
                <h3>95%</h3>
                <p>Match Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Latest Opportunities</h2>
          <p className="section-subtitle">
            Explore handpicked positions from industry leaders and innovative startups
          </p>
          
          <JobFilters filters={filters} onFilterChange={handleFilterChange} />
          
          {loading && (
            <div className="loading">
              <div style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                🔍 Discovering amazing opportunities...
              </div>
            </div>
          )}
          
          {error && (
            <div className="error" style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              background: 'rgba(239, 68, 68, 0.1)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😔</div>
              <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#991b1b' }}>
                {error}
              </div>
              <button 
                onClick={fetchJobs}
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Try Again
              </button>
            </div>
          )}
          
          {!loading && !error && (
            <>
              <div className="results-count">
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {filteredJobs.length} opportunity{filteredJobs.length !== 1 ? 's' : ''} found
                </span>
                {searchQuery && (
                  <span style={{ marginLeft: '1rem', color: '#2563eb' }}>
                    for "{searchQuery}"
                  </span>
                )}
              </div>
              
              <div className="job-grid">
                {filteredJobs.map((job, index) => (
                  <div key={job._id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
              
              {filteredJobs.length === 0 && (
                <div className="no-jobs">
                  <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🔍</div>
                  <h3 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '2rem' }}>
                    No matches found
                  </h3>
                  <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Try adjusting your search criteria or explore different filters
                  </p>
                  <button 
                    onClick={() => {
                      setFilters({});
                      setSearchQuery('');
                    }}
                    className="btn btn-primary"
                  >
                    Show All Jobs
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
