const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    position: {
        type: String,
        required: [true, 'Please add a position']
    },
    salary: {
        type: Number,
        required: [true, 'Please add a salary']
    },
    department: {
        type: String,
        required: [true, 'Please add a department']
    },
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
