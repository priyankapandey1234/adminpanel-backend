const { mongoose } = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // make name required if needed
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'] // Email format validation
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number.'] // Phone number validation (adjust as needed)
    },
    checked: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
    }
}, { timestamps: true }); // use timestamps instead of timeStamp

const Enquiry = mongoose.model("Enquiry", enquirySchema);
module.exports = Enquiry;
