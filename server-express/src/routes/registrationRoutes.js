const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const { getUserByEmail } = require('../db/queries/login');
const { createUser } = require('../db/queries/registration');

// Configure express-session
router.use(
  session({
    secret: 'sec-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if your app uses HTTPS
  })
);

router.post(
  '/',
  [
    check('username').notEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email is already registered
    const existingUser = await getUserByEmail(req.body.email);

    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };

    // Insert the user into the database
    const user = await createUser(newUser);

    // Set session data after successful registration
    req.session.userId = user.id; // Store user ID in the session

    // Return user data
    res.status(201).json({ message: 'Registration successful' });
  }
);

module.exports = router;
