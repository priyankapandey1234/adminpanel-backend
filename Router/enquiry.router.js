const express = require("express")
const {createEnquiry,getAllEnquiries,updateEnquiryById} = require("../Controller/enquiry.controller")

// Create a new enquiry
const router = express.Router();

router.post("/enquiries", createEnquiry);

// Get all enquiries
router.get("/enquiries", getAllEnquiries);

// Update an enquiry by ID
router.put("/enquiries/:id", updateEnquiryById);

module.exports=router 
