const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// GET /jobs - list all jobs with optional filtering
router.get('/', async (req, res) => {
  try {
    const { type, location, company } = req.query;
    const filter = {};
    
    if (type) filter.type = type;
    if (location) filter.location = { $regex: location, $options: 'i' };
    if (company) filter.company = { $regex: company, $options: 'i' };
    
    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /jobs/:id - get specific job details
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
