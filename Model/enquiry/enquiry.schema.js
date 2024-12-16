const { mongoose } = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,  
    },
    phone: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    }
});

 const Enquiry = mongoose.model("enquiries", enquirySchema);
module.exports=Enquiry