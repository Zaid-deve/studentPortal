const connectToDb = require('../config/db');
const Student = require('../models/studentSchema');
const UtilityHelper = require('../utils/helper');

class StudentController {
    static async handleSignup(req, res) {
        try {
            await connectToDb();
            const { email, password, phone } = req.body;
            const name = req.body.name || req.body.fullName

            const hashedPassword = await UtilityHelper.hashPassword(password);
            const newStudent = new Student({ name, email, password: hashedPassword, phone });

            await newStudent.save();
            res.status(201).json({ message: "Student registered successfully" });

        } catch (error) {
            if (error.name === "ValidationError") {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Error registering student, email or phone already exists" });
        }
    }

    static async handleLogin(req, res) {
        try {
            await connectToDb();
            const { email, password } = req.body;

            const student = await Student.findOne({ email });
            if (!student || !(await UtilityHelper.comparePassword(password, student.password))) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            const token = UtilityHelper.generateToken({ id: student._id, email: student.email }, process.env.JWT_SECRET);
            res.status(200).json({ message: "Login successful", token, fullName: student.name, phone:student.phone  });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateProfile(req, res) {
        try {
            await connectToDb();
            const { name, phone } = req.body;
            const studentId = req.user.id;

            if (!studentId) {
                return res.status(401).json({ message: "Unauthorized access" });
            }

            const updates = {};
            if (name) updates.name = name;
            if (phone) updates.phone = phone;

            if (Object.keys(updates).length === 0) {
                return res.status(400).json({ message: "No valid fields provided for update" });
            }

            const updatedStudent = await Student.findByIdAndUpdate(
                studentId,
                updates,
                { new: true, runValidators: true }
            );

            if (!updatedStudent) {
                return res.status(404).json({ message: "Student not found" });
            }

            res.status(200).json({ message: "Profile updated successfully", student: updatedStudent });

        } catch (error) {
            res.status(500).json({ message: "Error updating profile", error: error.message });
        }
    }


}

module.exports = StudentController;
