const passport = require("passport");
const mongoose = require("mongoose");
const localStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = mongoose.model("users");

const config = require("../config");

passport.use(
    "signup",
    new localStrategy({
            usernameField: "email",
            passwordField: "password",
        },
        (email, password, done) => {
            return User.create({
                email,
                password
            }, (error, user) => {
                if (error) {
                    return done(error);
                }

                return done(null, user);
            });
        }
    )
);

passport.use(
    "signin",
    new localStrategy({
            usernameField: "email",
            passwordField: "password",
        },
        (email, password, done) => {
            return User.findOne({
                    email
                })
                .then((user) => {
                    if (!user) {
                        return done(null, false, {
                            message: "User not found"
                        });
                    }

                    if (!user.validPassword(password)) {
                        return done(null, false, {
                            message: "Wrong Password"
                        });
                    }

                    return done(null, user);
                })
                .catch((error) => done(error));
        }
    )
);

passport.use(
    new JWTstrategy({
            secretOrKey: config.secret,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        },
        (token, done) => {
            if (token) return done(null, token.user);

            return done(error);
        }
    )
);