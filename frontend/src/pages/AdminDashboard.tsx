import React, { useState, useEffect } from 'react';
import { Application } from '../types';
import { applicationsApi } from '../services/api';

const AdminDashboard: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const applicationsData = await applicationsApi.getApplications();
      setApplications(applicationsData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch applications');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="admin-dashboard">
      <div className="loading">Loading applications...</div>
    </div>
  );
  
  if (error) return (
    <div className="admin-dashboard">
      <div className="error-message">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😔</div>
        <div>{error}</div>
        <button onClick={fetchApplications} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Total Applications: {applications.length}</p>
      </div>

      <div className="applications-grid">
        {applications.map((application) => (
          <div key={application._id} className="application-card">
            <div className="application-header">
              <div className="application-info">
                <h4>{application.name}</h4>
                <div className="application-meta">
                  <span>📧 {application.email}</span>
                  {application.phone && <span> • 📞 {application.phone}</span>}
                  <span> • 📅 {new Date(application.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="job-info">
                {typeof application.job_id === 'object' && (
                  <>
                    <h5>{application.job_id.title}</h5>
                    <span>{application.job_id.company}</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="application-content">
              <div className="resume-link" style={{ marginBottom: '1rem' }}>
                <strong>Resume:</strong>{' '}
                <a 
                  href={application.resume_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ marginLeft: '0.5rem' }}
                >
                  📄 View Resume
                </a>
              </div>
              
              <div className="cover-letter">
                <strong>Cover Letter:</strong>
                <p>{application.cover_letter}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {applications.length === 0 && (
        <div className="no-applications">
          <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>📋</div>
          <h3 style={{ marginBottom: '1rem', color: 'white' }}>No applications yet</h3>
          <p>Applications will appear here once candidates start applying for jobs.</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
