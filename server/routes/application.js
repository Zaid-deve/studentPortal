const ApplcationRoute = require('express').Router();
const ApplicationController = require('../controllers/ApplicationController');
const authMiddleware = require('../middleware/authMiddleware');


ApplcationRoute.use(authMiddleware);
ApplcationRoute.post("/course-change", ApplicationController.handleCourseChange);
ApplcationRoute.post("/semester-change", ApplicationController.handleSemesterChange);
ApplcationRoute.post("/scholarship", ApplicationController.handleScholarship);
ApplcationRoute.post('/get', ApplicationController.getStudentForms);


module.exports = ApplcationRoute