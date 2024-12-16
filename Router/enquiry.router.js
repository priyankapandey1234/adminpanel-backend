const express = require("express")
const {createEnquiry,getAllEnquiries,updateEnquiryById} = require("../Controller/enquiry.controller");
const { authenticate } = require("../Controller/userController");

// Create a new enquiry
const router = express.Router();

router.post("/enquiries", createEnquiry);

// Get all enquiries
router.get("/enquiries",authenticate, getAllEnquiries);

// Update an enquiry by ID
router.put("/enquiries/:id", updateEnquiryById);

module.exports=router 
