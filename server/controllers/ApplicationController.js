const connectToDb = require('../config/db');
const Application = require("../models/applicationSchema");
const Student = require("../models/studentSchema"); 

class ApplicationController {
    static async handleCourseChange(req, res) {
        try {
            await connectToDb();

            const { course, semester } = req.body;
            const studentId = req.user?.id;

            if (!studentId) {
                return res.status(401).json({ success: false, message: "Unauthorized: Student ID is missing." });
            }

            if (!course || !semester) {
                return res.status(400).json({ success: false, message: "Course and semester are required." });
            }

            if (semester < 1 || semester > 6) {
                return res.status(400).json({ success: false, message: "Invalid semester value." });
            }

            const st = await Student.findById(studentId);
            if (!st) {
                return res.status(404).json({ success: false, message: "Student not found." });
            }

            const Form = new Application({ studentId, type: "Course Change", course, semester });
            await Form.save();

            res.status(200).json({ success: true, message: "Course change request submitted successfully." });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server error, please try again later.", error:error.message });
        }
    }

    static async handleSemesterChange(req, res) {
        try {
            await connectToDb();

            const { semester } = req.body;
            const studentId = req.user?.id;

            if (!studentId) {
                return res.status(401).json({ success: false, message: "Unauthorized: Student ID is missing." });
            }

            if (!semester || typeof semester !== "number" || semester < 1 || semester > 6) {
                return res.status(400).json({ success: false, message: "Invalid semester value." });
            }

            const st = await Student.findById(studentId);
            if (!st) {
                return res.status(404).json({ success: false, message: "Student not found." });
            }

            const Form = new Application({ studentId, type: "Admission", semester });
            await Form.save();

            res.status(200).json({ success: true, message: "Semester change request submitted successfully." });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Server error, please try again later." });
        }
    }

    static async handleScholarship(req, res) {
        try {
            await connectToDb();

            const { amount } = req.body;
            const studentId = req.user?.id;

            if (!studentId) {
                return res.status(401).json({ success: false, message: "Unauthorized: Student ID is missing." });
            }

            if (!amount || isNaN(amount) || Number(amount) <= 0) {
                return res.status(400).json({ success: false, message: "Please enter a valid scholarship amount." });
            }

            const st = await Student.findById(studentId);
            if (!st) {
                return res.status(404).json({ success: false, message: "Student not found." });
            }

            const Form = new Application({ studentId, type: "Scholarship", amount: Number(amount) });
            await Form.save();

            res.status(201).json({ success: true, message: "Scholarship Form submitted successfully." });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server error, please try again later." });
        }
    }

    static async getStudentForms(req, res) {
        try {
            await connectToDb();
    
            const studentId = req.user?.id;
            if (!studentId) {
                return res.status(401).json({ success: false, message: "Unauthorized: Student ID is missing." });
            }
    
            const student = await Student.findById(studentId);
            if (!student) {
                return res.status(404).json({ success: false, message: "Student not found." });
            }
    
            const forms = await Application.find({ studentId }).sort({ createdAt: -1 });
    
            res.status(200).json({ success: true, forms });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server error, please try again later.", error: error.message });
        }
    }
    
}

module.exports = ApplicationController;
