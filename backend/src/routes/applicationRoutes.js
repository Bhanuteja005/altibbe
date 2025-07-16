const express = require('express');
const Application = require('../models/Application');
const Job = require('../models/Job');
const Joi = require('joi');
const router = express.Router();

// Validation schema
const applicationSchema = Joi.object({
  job_id: Joi.string().required(),
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  resume_link: Joi.string().uri().required(),
  cover_letter: Joi.string().min(10).required(),
  phone: Joi.string().optional()
});

// POST /applications - submit new application
router.post('/', async (req, res) => {
  try {
    const { error, value } = applicationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check if job exists
    const job = await Job.findById(value.job_id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const application = new Application(value);
    await application.save();
    
    const populatedApplication = await Application.findById(application._id).populate('job_id');
    res.status(201).json(populatedApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /applications - list all applications (admin view)
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('job_id', 'title company')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
router.get('/job/:jobId', async (req, res) => {
  try {
    const applications = await Application.find({ job_id: req.params.jobId })
      .populate('job_id', 'title company')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
