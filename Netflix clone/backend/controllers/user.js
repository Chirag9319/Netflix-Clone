import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid Data",
        success: "false"
      })
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "You should have to Sign in first",
        success: "false"
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: "false",
      });
    }
    const tokenData = {
      id: user._id
    }
    const token = await jwt.sign(tokenData, "hjguc78uibcvhbcuywec8", { expiresIn: "1d" });
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      message: `welcome back ${user.fullName}`,
      success: "true"
    })
  } catch (error) {
    console.log(error);

  }
}

export const Logout = async (req, res) => {
  return res.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
    message: "user successfully logged out",
    success: "true"
  })
}

export const Signin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "Invalid Data",
        success: "false"
      })
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This email is already exist",
        success: "false"
      })
    }
    const hashPassword = await bcryptjs.hash(password, 16)
    await User.create({
      fullName,
      email,
      password: hashPassword
    });
    return res.status(201).json({
      message: "Account Created Successfully",
      success: "true"
    })

  } catch (error) {
    console.log(error);

  }
}