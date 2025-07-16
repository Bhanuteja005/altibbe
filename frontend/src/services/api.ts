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
    const response = await api.get('/jobs', { params: filters });
    return response.data;
  },

  getJob: async (id: string): Promise<Job> => {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  },
};

export const applicationsApi = {
  submitApplication: async (jobId: string, applicationData: ApplicationForm): Promise<Application> => {
    const response = await api.post('/applications', {
      job_id: jobId,
      ...applicationData,
    });
    return response.data;
  },

  getApplications: async (): Promise<Application[]> => {
    const response = await api.get('/applications');
    return response.data;
  },
};

export default api;
