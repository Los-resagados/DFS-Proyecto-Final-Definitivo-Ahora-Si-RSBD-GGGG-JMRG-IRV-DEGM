const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const User = require('../models/User');

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:
          process.env.GOOGLE_CALLBACK_URL ||
          `${process.env.BASE_URL || 'http://localhost:3000'}/api/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = (profile.emails && profile.emails[0] && profile.emails[0].value) || profile.displayName || `google_${profile.id}`;
          let user = await User.findOne({ provider: 'google', providerId: profile.id });
          if (!user) {
            // Ensure unique username
            const usernameCandidate = email;
            user = new User({
              username: usernameCandidate,
              password: '',
              provider: 'google',
              providerId: profile.id,
              role: 'usuario',
            });
            await user.save();
          }
          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  passport.use(
    new MicrosoftStrategy(
      {
        clientID: process.env.MICROSOFT_CLIENT_ID,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        callbackURL:
          process.env.MICROSOFT_CALLBACK_URL ||
          `${process.env.BASE_URL || 'http://localhost:3000'}/api/auth/microsoft/callback`,
        scope: ['user.read'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = (profile.emails && profile.emails[0] && profile.emails[0].value) || profile.displayName || `ms_${profile.id}`;
          let user = await User.findOne({ provider: 'microsoft', providerId: profile.id });
          if (!user) {
            const usernameCandidate = email;
            user = new User({
              username: usernameCandidate,
              password: '',
              provider: 'microsoft',
              providerId: profile.id,
              role: 'usuario',
            });
            await user.save();
          }
          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};
