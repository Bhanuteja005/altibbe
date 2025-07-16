import axios from 'axios';
import { Job, Application, JobFilters, ApplicationForm } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://altibbe-pi.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const jobsApi = {
  getJobs: async (filters?: JobFilters): Promise<Job[]> => {
    try {
      const response = await api.get('/api/jobs', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  },

  getJob: async (id: string): Promise<Job> => {
    try {
      const response = await api.get(`/api/jobs/${id}`);
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
      const response = await api.post('/api/applications', {
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
      const response = await api.get('/api/applications');
      return response.data;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },
};

export default api;
