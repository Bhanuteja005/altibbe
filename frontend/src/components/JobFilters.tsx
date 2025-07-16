import React from 'react';
import { JobFilters } from '../types';

interface JobFiltersProps {
  filters: JobFilters;
  onFilterChange: (filters: JobFilters) => void;
}

const JobFiltersComponent: React.FC<JobFiltersProps> = ({ filters, onFilterChange }) => {
  const handleFilterChange = (key: keyof JobFilters, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value || undefined,
    });
  };

  return (
    <div className="filters">
      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            value={filters.type || ''}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="remote">Remote</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={filters.location || ''}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Enter company"
            value={filters.company || ''}
            onChange={(e) => handleFilterChange('company', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default JobFiltersComponent;
