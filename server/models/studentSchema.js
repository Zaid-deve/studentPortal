const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    password: { type: String, required: true },
    phone: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"] 
    },
    appliedApplications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
