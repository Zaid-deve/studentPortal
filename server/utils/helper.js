const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

class UtilityHelper {
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }

    static validatePassword(password) {
        return password.length >= 6;
    }

    static async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    static async comparePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    static generateToken(payload, secret=process.env.JWT_KEY, expiresIn = '7d') {
        return jwt.sign(payload, secret, { expiresIn });
    }
}

module.exports = UtilityHelper;
