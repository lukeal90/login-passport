const passport = require("passport");
const local = require("passport-local");

const { User } = require("../models/user");

const { createHash, isValidPassword } = require("../utils/index");

const LocalStrategy = local.Strategy;

const initPassport = () => {
  passport.use(
    "login",
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (error, user) => {
        if (error) {
          return done(error);
        }
        if (!user) {
          console.log("Usuario no encontrado");
          return done(null, false);
        }
        if (!isValidPassword(user, password)) {
          console.log("Password invalido");
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true },
      (req, username, password, done) => {
        User.findOne({ username: username }, function (error, user) {
          if (error) {
            console.log("Error en registro " + error);
            return done(error);
          }
          if (user) {
            console.log("El usuario ya existe");
            return done(null, false);
          }
          const newUser = {
            username,
            password: createHash(password),
            email: req.body.email,
            firstname: req.body.firstName,
            lastname: req.body.lastName,
          };
          User.create(newUser, function (error, userWithId) {
            if (error) {
              console.log("Error creating the user");
              return done(error);
            }
            console.log(userWithId);
            console.log("Usuario registered");
            return done(null, userWithId);
          });
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, done);
  });
};

module.exports = {
  initPassport,
};