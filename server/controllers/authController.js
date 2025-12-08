import supabase from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const me = async (req, res) => {
  return res.json({ user: req.user });
};

export const register = async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          username,
          password: hashed,
        },
      ])
      .select()
      .single();

    if (error) return res.status(400).json({ error: error.message });

    return res.json({ message: "User registered", user: data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (error || !user)
      return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("session", token, {
      httpOnly: true,
      secure: false, // true in production w/ https
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ message: "Logged in", user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("session", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  return res.json({ message: "Logged out" });
};
