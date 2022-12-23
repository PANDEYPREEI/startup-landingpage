import { NextApiRequest, NextApiResponse } from "next";
import main from "../../db/mongoose";
import Users from "../../model/User";
import User from "../../model/User";
var CryptoJS = require("crypto-js");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await main();
  switch (method) {
    case "GET":
      try {
        const users = await Users.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
          const { email, password } = req.body;
          const userCredentials = new User({
            email,
            password: CryptoJS.AES.encrypt(
              password,
              "secret key 123"
            ).toString(),
          });
          userCredentials.save();
          res.status(200).json({
            success: true,
            data: userCredentials,
          });
        }
      } catch (error) {
        res.status(400).json({ success: false, error: "User already Exist" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
  res.status(200).json({ name: "John Doe" });
}
