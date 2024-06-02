import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  //hash password
  const hashedpassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: { name, email, hashedpassword },
  });

  console.log(newUser);
};

export const login = (req, res) => {
  console.log("login endpoint called");
};

export const logout = (req, res) => {
  console.log("logout endpoint called");
};
