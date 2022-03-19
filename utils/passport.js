const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const UserSerializer = require("../serializers/user");
const config = require("../config");
const redis = require("./redis");

async function getUserByUsername(username) {
  return User.findOne({ where: { username } });
}

async function getUserById(id) {
  const cachedUser = await redis.get(id);
  if (cachedUser) return JSON.parse(cachedUser);

  const user = await User.findByPk(id);
  const currentUser = UserSerializer.serialize(user);
  redis.set(id, currentUser);
  return user;
}

passport.use(
  new LocalStrategy(async function (username, password, done) {
    let user = await getUserByUsername(username);
    if (!user) {
      return done(null, false, { message: "No user with that username" });
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
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },
    async function (token, tokenSecret, profile, done) {
      const user = {
        id: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        password: "",
        username: profile.emails[0].value,
      };
      const [dbuser, created] = await User.findOrCreate({
        where: { id: user.id },
        defaults: user,
      }).catch((err) => {
        done(err);
      });

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
