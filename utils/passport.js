const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuthStrategy;
const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const UserSerializer = require("../serializers/user");

async function getUserByUsername(username) {
  return User.findOne({ where: { username } });
}
async function getUserById(id) {
  return await User.findByPk(id);
}

function init(passport) {
  passport.use(
    new LocalStrategy(async function (username, password, done) {
      let user = await getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "No user with that email" });
      }

      try {
        if (await bcrypt.compare(password, user.password)) {
          user = UserSerializer.serialize(user);
          return done(null, user);
        } else {
          return done(null, false, { message: "Password incorrect" });
        }
      } catch (error) {
        return done(error);
      }
    })
  );
  //   passport.use(
  //     new GoogleStrategy(
  //       {
  //         consumerKey: GOOGLE_CONSUMER_KEY,
  //         consumerSecret: GOOGLE_CONSUMER_SECRET,
  //         callbackURL: "http://www.example.com/auth/google/callback",
  //       },
  //       function (token, tokenSecret, profile, done) {
  //         User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //           return done(err, user);
  //         });
  //       }
  //     )
  //   );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await getUserById(id);
    done(null, user);
  });
}

init(passport);

module.exports = passport;
