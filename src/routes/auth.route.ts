import { Router } from 'express';
import passport from 'passport';

import { login, logout, signup } from '../controllers/auth.controller';
import { validate } from '../middleware/validate.middleware';
import { loginSchema, signupSchema } from '../validations/auth.validation';

const router = Router();

router.post('/signup', validate(signupSchema), signup);

router.post('/login', validate(loginSchema), login);

router.post('/logout', logout);

// Step 1 → Redirect to Google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// Step 2 → Callback after login
router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false
  }),
  (req, res) => {
    res.send('✅ Google Login Successful');
  }
);
export default router;
