import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { BadRequestError } from "../utils/custom_errors.js";
import { createJWT } from "../utils/token.js";

export const signup = async (req, res) => {
  const { name, username, password } = req.body;
  const user = await User.create({
    name,
    username,
    password: await hashPassword(password),
  });
  if (!user)
    throw new BadRequestError("There was an error creating your account");
  res.status(StatusCodes.OK).json("");
};

export const signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user)
    throw new BadRequestError(
      `A user with an username ${username} does not exist`
    );
  if (!(await comparePassword(password, user.password)))
    throw new BadRequestError("Wrong password");
  const token = createJWT({ _id: user._id });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: false, //set true on deployment
  });
  res.status(StatusCodes.OK).json("");
};
