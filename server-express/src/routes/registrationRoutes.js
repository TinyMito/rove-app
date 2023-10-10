const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const { getUserByEmail } = require('../db/queries/login');
const { createUser } = require('../db/queries/registration');

// Configure express-session
/* router.use(
  session({
    secret: 'sec-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if your app uses HTTPS
  })
); */

router.post(
  '/',
  [
    check('firstname').notEmpty(),
    check('lastname').notEmpty(),
    check('username').notEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
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
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      avatar: req.body.avatar
    };

    // Insert the user into the database
    const user = await createUser(newUser);

    // Set session data after successful login
    req.session.userId = user.id; // Store user ID in the session
    req.session.userFirst = user.first_name;
    req.session.userLast = user.last_name;
    req.session.userAlias = user.username;
    req.session.userEmail = user.email;
    req.session.userProfile = user.profile_thumbnail_img;

    // Return user data
    res.status(201).json({ message: 'Registration successful' });
  }
);

module.exports = router;