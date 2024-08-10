

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ObtainScore: {
        type: Number,  // Using Number for score values
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming studentId is a MongoDB ObjectId
        required: true,
        ref: 'Student' // Reference to a Student model, if applicable
    }
});

const StudentResult = mongoose.model('Result', StudentSchema);

module.exports = StudentResult;
