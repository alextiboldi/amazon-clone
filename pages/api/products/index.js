import nc from "next-connect";
import db from "../../../utils/db";
import Product from "../../../models/Product";
const handler = nc();

export default handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.status(200).json(products);
});
