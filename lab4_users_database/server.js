
// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Neeraj:Neeraj1807@cluster0.z71bo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));
// POST endpoint to create a new user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ errors: validationErrors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

const PORT = 8077;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});