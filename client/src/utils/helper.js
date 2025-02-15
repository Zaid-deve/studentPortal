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

    static validateFullname(name) {
        const fullnameRegex = /^[A-Za-z\s]+$/;
        return fullnameRegex.test(name);
    }
}

export default UtilityHelper