const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { getUserByEmail } = require('../db/queries/login');

// Configure express-session
/* router.use(
  session({
    secret: 'sec-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
); */

router.post(
  '/',
  [
    check('email').isEmail(),
    check('password').notEmpty(),
  ],
  async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the user exists
    const user = await getUserByEmail(req.body.email);

    if (!user) {
      return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Set session data after successful login
    req.session.userId = user.id; // Store user ID in the session
    req.session.userFirst = user.first_name;
    req.session.userLast = user.last_name;
    req.session.userAlias = user.username;
    req.session.userEmail = user.email;
    req.session.userProfile = user.profile_thumbnail_img;

    // Return success message or user data
    res.status(200).json({ message: 'Login successful' });
  }
);

module.exports = router;