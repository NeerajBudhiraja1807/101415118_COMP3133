const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

// Get all restaurants
router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get restaurants by cuisine
router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ cuisines: req.params.cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get selected columns sorted by restaurant_id
router.get('/restaurants', async (req, res) => {
    try {
        const sortOrder = req.query.sortBy === 'ASC' ? 1 : -1;
        const restaurants = await Restaurant.find({}, { id: 1, cuisines: 1, name: 1, city: 1, restaurant_id: 1 }).sort({ restaurant_id: sortOrder });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get restaurants with cuisine = 'Delicatessen' and city != 'Brooklyn'
router.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find(
            { cuisines: 'Delicatessen', city: { $ne: 'Brooklyn' } },
            { cuisines: 1, name: 1, city: 1, _id: 0 }
        ).sort({ name: 1 });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
