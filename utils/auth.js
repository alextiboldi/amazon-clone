import jwt from "jsonwebtoken";
const signToken = (user) => {
  console.log(`Siging JWT toke for user ${user.id}`);
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

export { signToken };
