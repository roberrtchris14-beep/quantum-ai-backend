const express = require('express');
const router = express.Router();
const supabase = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, name, created_at')
      .eq('id', req.user.userId)
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ user: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name } = req.body;

    const { data, error } = await supabase
      .from('users')
      .update({ name })
      .eq('id', req.user.userId)
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: 'Profile updated', user: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;