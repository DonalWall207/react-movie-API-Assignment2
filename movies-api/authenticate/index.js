import passport from 'passport';
import passportJWT from 'passport-jwt';
import UserModel from './../api/users/userModel';
import dotenv from 'dotenv';

dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
// eslint-disable-next-line no-undef
jwtOptions.secretOrKey = process.env.SECRET;
// ... other imports

const strategy = new JWTStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await UserModel.findByUserName(payload.username);

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
});

passport.use(strategy);

export default passport;
