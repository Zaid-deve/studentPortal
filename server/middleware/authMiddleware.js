const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config();

const authMiddleware = (req, res, next) => {
    try {
        const token = req.body?.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
