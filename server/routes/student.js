const StudentController = require('../controllers/StudentController');
const authMiddleware = require('../middleware/authMiddleware');

const StudentRoute = require('express').Router();

StudentRoute.post('/login', StudentController.handleLogin);
StudentRoute.post('/signup', StudentController.handleSignup);
StudentRoute.post('/update', authMiddleware, StudentController.handleSignup);


module.exports = StudentRoute