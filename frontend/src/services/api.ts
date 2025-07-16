import axios from 'axios';
import { Job, Application, JobFilters, ApplicationForm } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const jobsApi = {
  getJobs: async (filters?: JobFilters): Promise<Job[]> => {
    try {
      const response = await api.get('/jobs', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  },

  getJob: async (id: string): Promise<Job> => {
    try {
      const response = await api.get(`/jobs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching job:', error);
      throw error;
    }
  },
};

export const applicationsApi = {
  submitApplication: async (jobId: string, applicationData: ApplicationForm): Promise<Application> => {
    try {
      const response = await api.post('/applications', {
        job_id: jobId,
        ...applicationData,
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  },

  getApplications: async (): Promise<Application[]> => {
    try {
      const response = await api.get('/applications');
      return response.data;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },
};

export default api;
