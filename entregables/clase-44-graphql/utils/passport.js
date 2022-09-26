const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const UserDaoFactory = require("../model/daos/User/userDao");
const { PERSISTENCE } = require("../config");


const userDao = UserDaoFactory.createUserDao(PERSISTENCE)

passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, cb) => {
      const user = await userDao.find("username", username);
      if (user) {
        return cb(new Error("Ya existe un usario con ese nombre"), false);
      } else {
        const newUser = {
          id: Date.now(),
          username,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
          email: req.body.email
        };
        await userDao.addItem(newUser);
        return cb(null, newUser);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, cb) => {
      const user = await userDao.find("username", username);
      if (!user || !bcrypt.compareSync(password, user.password)) {
        cb(new Error("Datos incorrectos"), false);
      } else {
        return cb(null, user);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, {id: user.id, username: user.username});
});

passport.deserializeUser(async (usr, done) => {
  try {
    const user = await userDao.find('username', usr.username);
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

module.exports = passport