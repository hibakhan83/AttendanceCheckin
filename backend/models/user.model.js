const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    campus: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    pantherId: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
    },
    

    department: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    level: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    degree: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    college: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    
    year: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
    },  
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;