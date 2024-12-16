const Enquiry = require("../Model/enquiry/enquiry.schema")

// Create a new enquiry
exports.createEnquiry = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const newEnquiry = new Enquiry({
            name,
            email,
            phone,
            checked: false,  // Default value
        });

        const savedEnquiry = await newEnquiry.save();
        res.status(201).json(savedEnquiry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
    try {
        const enquiries = await Enquiry.find();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ error: "Error fetching enquiries" });
    }
};

// Update an enquiry by ID
exports.updateEnquiryById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, checked } = req.body;

        const updatedEnquiry = await Enquiry.findByIdAndUpdate(
            id,
            { name, email, phone, checked },
            { new: true } // Return the updated enquiry
        );

        if (!updatedEnquiry) {
            return res.status(404).json({ error: "Enquiry not found" });
        }

        res.status(200).json(updatedEnquiry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
