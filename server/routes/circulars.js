// routes/circulars.js

const express = require('express');
const router = express.Router();
const Circular = require('../models/Circular');

// POST /api/circulars
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const circular = new Circular({ title, content });
    await circular.save();
    res.json(circular);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET /api/circulars
router.get('/', async (req, res) => {
  try {
    const circulars = await Circular.find().sort('-createdAt');
    res.json(circulars);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
