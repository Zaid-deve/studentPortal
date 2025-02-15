const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    type: { type: String, enum: ['Admission', 'Scholarship', 'Course Change'], required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    details: { type: String },
}, { timestamps: true });

const Application = mongoose.model('Applications', applicationSchema);

module.exports = Application;
