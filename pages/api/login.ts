import { NextApiRequest, NextApiResponse } from "next";
import main from "../../db/mongoose";
import Users from "../../model/User";
import User from "../../model/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

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
        const bytes = CryptoJS.AES.decrypt(user.password, "secret key 123");
        let decryptUserPassword = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
          if (
            req.body.email == user.email &&
            req.body.password == decryptUserPassword
          ) {
            var token = jwt.sign(
              { success: true, email: user.email },
              "jwtsecret"
            );
            res.status(200).json({
              success: true,
              token,
            });
          } else {
            res
              .status(400)
              .json({ success: false, error: "Invalid Credentials" });
          }
        } else {
          res
            .status(400)
            .json({ success: false, error: "User does not exist" });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
  res.status(200).json({ name: "John Doe" });
}
