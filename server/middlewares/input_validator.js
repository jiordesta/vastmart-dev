import { body, validationResult } from "express-validator";
import { BadRequestError } from "../utils/custom_errors.js";

import User from "../models/User.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validate_signup = withValidationErrors([
  body("name").notEmpty().withMessage("Name is required"),
  body("username")
    .notEmpty()
    .withMessage("Username is Required")
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) throw new BadRequestError(`${username} is already taken`);
    }),
]);

export const validate_signin = withValidationErrors([
  body("username").notEmpty().withMessage("Username is Required"),
  body("password").notEmpty().withMessage("Password is Required"), //add custom for security
]);
