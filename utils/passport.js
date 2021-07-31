const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const UserSerializer = require("../serializers/user");
const config = require("../config");

async function getUserByUsername(username) {
  return User.findOne({ where: { username } });
}
async function getUserById(id) {
  return await User.findByPk(id);
}

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

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
    },
    async function (token, tokenSecret, profile, done) {
      const user = {
        id: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        password: "",
        strategy: "google",
        username: profile.emails[0].value,
      };
      const [dbuser, created] = await User.findOrCreate({
        where: { id: user.id },
        defaults: user,
      }).catch((err) => {
        done(err);
      });

      // console.log("here");
      // console.log(profile);
      // return done(null, { id: "abcde" });
      return done(null, dbuser);
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id);
  done(null, user);
});

module.exports = passport;
