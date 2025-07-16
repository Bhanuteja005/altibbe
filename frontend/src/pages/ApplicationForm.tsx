import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Job, ApplicationForm as ApplicationFormType } from '../types';
import { jobsApi, applicationsApi } from '../services/api';

const ApplicationForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<ApplicationFormType>({
    name: '',
    email: '',
    resume_link: '',
    cover_letter: '',
    phone: '',
  });

  useEffect(() => {
    if (id) {
      fetchJob(id);
    }
  }, [id]);

  const fetchJob = async (jobId: string) => {
    try {
      const jobData = await jobsApi.getJob(jobId);
      setJob(jobData);
    } catch (err) {
      console.error('Failed to fetch job:', err);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.resume_link.trim()) {
      newErrors.resume_link = 'Resume link is required';
    } else if (!/^https?:\/\/.+/.test(formData.resume_link)) {
      newErrors.resume_link = 'Please enter a valid URL';
    }

    if (!formData.cover_letter.trim()) {
      newErrors.cover_letter = 'Cover letter is required';
    } else if (formData.cover_letter.length < 50) {
      newErrors.cover_letter = 'Cover letter must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !id) return;

    try {
      setSubmitting(true);
      await applicationsApi.submitApplication(id, formData);
      setSuccess(true);
      setTimeout(() => {
        navigate(`/jobs/${id}`);
      }, 2000);
    } catch (err) {
      console.error('Failed to submit application:', err);
      setErrors({ submit: 'Failed to submit application. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (!job) return <div className="container">Job not found</div>;

  return (
    <div className="container">
      <div className="form-container">
        <h1>Apply for {job.title}</h1>
        <p>at {job.company}</p>
        
        {success && (
          <div className="success-message">
            Application submitted successfully! Redirecting...
          </div>
        )}
        
        {errors.submit && (
          <div className="error-message">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume_link">Resume Link *</label>
            <input
              type="url"
              id="resume_link"
              name="resume_link"
              value={formData.resume_link}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
            {errors.resume_link && <div className="error-message">{errors.resume_link}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="cover_letter">Cover Letter *</label>
            <textarea
              id="cover_letter"
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position..."
              required
            />
            {errors.cover_letter && <div className="error-message">{errors.cover_letter}</div>}
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate(`/jobs/${id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
