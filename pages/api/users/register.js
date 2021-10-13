import nc from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
const handler = nc();

export default handler.post(async (req, res) => {
  await db.connect();

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  const response = {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: token,
  };
  res.status(200).json(response);
});
