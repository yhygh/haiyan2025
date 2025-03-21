import validator from "validator";
import sanitizeHtml from "sanitize-html";

import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

// This is not okay in production. But I'm using it
// for personal purpose, one less thing to remember
const SECRET_KEY = process.env.ADMIN;

const generateToken = (user) => {
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};

const signin = async function (req, res, next) {
  try {
    // finding a user
    let user = await User.findOne({
      email: req.body.email,
    });

    console.log(`process.env.ADMIN = ${process.env.ADMIN}`);
    console.log(`signin user = ${JSON.stringify(user)}`);
    console.log(`req.body = ${JSON.stringify(req.body)}`);
    // console.log(req.body);

    let { id, username } = user;

    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      const isAdmin = username === process.env.ADMIN;

      let token = generateToken({ id, username, isAdmin });

      // only return isAdmin for signin, not for signup
      return res.status(200).json({
        id,
        username,
        token,
        isAdmin: isAdmin,
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password.",
      });
    }
    // checking if the password matches what was sent to the server
    // if it all matches, log him in
  } catch (e) {
    return next({
      status: 400,
      message: "Invalid Email/Password.",
    });
  }
};

// TODO: move this to a common file
// sanitize attacks such as <script>
const sanitizeInput = function (userInput) {
  const sanitizedInput = sanitizeHtml(userInput, {
    allowedTags: [],
    allowedAttributes: {},
  });
  if (sanitizedInput !== userInput) {
    throw new Error("HTML tags not allowed!");
  }
};

const signup = async function (req, res, next) {
  console.log(`did I get here?`);
  try {
    sanitizeHtml(req.body.email);
    if (!validator.isEmail(req.body.email)) {
      throw new Error("Invalid Email Address!");
    }

    sanitizeHtml(req.body.username);
    if (req.body.username.length > 15 || req.body.username.length < 6) {
      throw new Error("username must be between 6 and 15 characters");
    }

    let pass = req.body.password;
    sanitizeHtml(pass);

    if (pass.length < 6 || pass.length > 16) {
      throw new Error("password must between 6 to 16 characters");
    }

    // console.log(`req.body = ${JSON.stringify(req.body)}`);
    // console.log(req.body);

    // create a user
    let user = await User.create(req.body);

    let { id, username } = user;
    const isAdmin = username === process.env.ADMIN;
    let token = generateToken({
      id,
      username,
      isAdmin,
    });

    return res.status(200).json({
      id,
      username,
      token,
    });
  } catch (err) {
    // see what kind of error it is
    // if it is a certain error
    // respond with user/name already taken
    // otherwise just send back a generic 400

    // if a validation fails
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }

    return next({
      status: 400,
      message: err.message,
    });
  }
};

export { SECRET_KEY, signin, signup };
