// const express = require('express');
// const router = express.Router();
// const User = require('../models/Users'); // Assuming your user model is in 'models/Users.js'

// // GET route to fetch user profile based on user ID or authenticated user
// router.get('/profile', async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id); // Assuming the user is authenticated
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(user);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;