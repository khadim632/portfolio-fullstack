import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "ton_secret_super_secret";

export const requireAuth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Accès refusé. Token manquant." });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalide." });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Accès admin requis." });
  }
  next();
};