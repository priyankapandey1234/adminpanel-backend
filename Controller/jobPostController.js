const JobPost = require("../Model/JobPost");



// Create a new job post
exports.createJobPost = async (req, res) => {
    try {
        const newJobPost = new JobPost(req.body);
        const savedJobPost = await newJobPost.save();
        res.status(201).json(savedJobPost);
    } catch (error) {
        res.status(400).json({ message: 'Error creating job post', error });
    }
};



// Edit a job post by ID
exports.editJobPostByID = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedJobPost = await JobPost.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedJobPost) {
            return res.status(404).json({ message: 'Job post not found' });
        }
        res.status(200).json(updatedJobPost);
    } catch (error) {
        res.status(400).json({ message: 'Error updating job post', error });
    }
};




// Find a job post by ID
exports.getSingleJobPost = async (req, res) => {
    const { id } = req.params;
    try {
        const jobPost = await JobPost.findById(id);
        if (!jobPost) {
            return res.status(404).json({ message: 'Job post not found' });
        }
        res.status(200).json(jobPost);
    } catch (error) {
        res.status(500).json({ message: 'Error finding job post', error });
    }
};




// Get all job posts
exports.getAllJobPosts = async (req, res) => {
    const { page = 1, limit = 10, role } = req.query; // Default to page 1 and limit to 10
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10)
    };

    try {

        let jobPosts
        if(role){
        jobPosts = await JobPost.find({ role: { $regex: role, $options: 'i' } })
            .limit(options.limit)
            .skip((options.page - 1) * options.limit);

        }else {
            jobPosts = await JobPost.find()
            .limit(options.limit)
            .skip((options.page - 1) * options.limit);
        }

        const totalPosts = await JobPost.countDocuments();

        const totalPages = Math.ceil(totalPosts / options.limit);
        res.status(200)
            .json({
                totalPosts,
                totalPages,
                currentPage: options.page,
                jobPosts
            });


    } catch (error) {
        res.status(500)
            .json({
                message: 'Error retrieving job posts',
                error
            });
    }
};




// Delete a job post by ID
exports.deleteSingleJobPost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJobPost = await JobPost.findByIdAndDelete(id);
        if (!deletedJobPost) {
            return res.status(404).json({ message: 'Job post not found' });
        }
        res.status(200).json({ message: 'Job post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job post', error });
    }
};