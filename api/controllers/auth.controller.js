import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  //hash password
  const hashedpassword = await bcrypt.hash(password, 10);
  console.log(hashedpassword);
};

export const login = (req, res) => {
  console.log("login endpoint called");
};

export const logout = (req, res) => {
  console.log("logout endpoint called");
};
