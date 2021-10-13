import nc from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
const handler = nc();

export default handler.post(async (req, res) => {
  await db.connect();

  const user = await User.findOne({ email: req.body.email });
  await db.disconnect();

  console.log(`Checking password for ${req.body.email} `);

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: token,
    };
    console.log(`JWT Auth Response : ${JSON.stringify(token)}`);
    res.status(200).json(response);
  } else res.status(401).send({ message: "Invalid username or password" });
});
