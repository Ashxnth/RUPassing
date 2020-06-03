const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add a description']
    },
    grade: {
        type: Number,
        required: [true, 'Please add a grade']
    },
    weight: {
        type: Number,
        required: [true, 'Please add a weight']
    }
});

module.exports = mongoose.model('Grade', GradeSchema);