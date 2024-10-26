const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
    role: { 
        type: String, 
        required: true 
    },
    location: {
        type: String, 
        required: true
    },
    job_type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], // Enum for job types
        required: true
    },
    work_mode:{
        type: String,
        enum: ['Hybrid','Working from the office', 'Working from the home', 'Flexible'], // Enum for job types
        required: true
    },
    work_description: { 
        type: String, 
        required: true 
    },
    experience: {
        type: Number, 
        required: true
    },
    skills: { 
        type: [String], 
        required: true 
    }, // Array of required skills
    responsibilities: { 
        type: [String], 
        required: true 
    }, // Array of responsibilities
    good_to_have: { 
        type: [String] 
    }, // Array of good-to-have skills (optional)
    pay_range: {
        min: { 
            type: Number, 
            required: true 
        }, // Minimum salary
        max: { 
            type: Number, 
            required: true 
        }, // Maximum salary
        currency: { 
            type: String, 
            required: true, 
            default: 'INR' 
        } // Currency of the pay range
    },
    is_active: { 
        type: Boolean, 
        default: true 
    }, // Indicates if the job post is active
    vacancy: { 
        type: Number, 
        required: true, 
        default: 1 
    } // Number of vacancies available
});

// Create the model
const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
