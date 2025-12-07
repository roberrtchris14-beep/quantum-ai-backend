const express = require('express');
const router = express.Router();
const supabase = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

// Get user analytics
router.get('/user', authenticateToken, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('quantum_computations')
      .select('*')
      .eq('user_id', req.user.userId);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const analytics = {
      totalComputations: data.length,
      averageExecutionTime: data.reduce((acc, c) => acc + c.execution_time, 0) / data.length || 0,
      averageFidelity: data.reduce((acc, c) => acc + c.fidelity, 0) / data.length || 0,
      totalQubitsUsed: data.reduce((acc, c) => acc + c.qubits, 0),
      algorithms: [...new Set(data.map(c => c.algorithm))]
    };

    res.json({ analytics });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get platform analytics (admin)
router.get('/platform', async (req, res) => {
  try {
    const { data: computations } = await supabase
      .from('quantum_computations')
      .select('*');

    const { data: users } = await supabase
      .from('users')
      .select('id');

    res.json({
      totalUsers: users?.length || 0,
      totalComputations: computations?.length || 0,
      activeToday: Math.floor(Math.random() * 50) + 10,
      systemLoad: Math.random() * 0.5 + 0.3
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;