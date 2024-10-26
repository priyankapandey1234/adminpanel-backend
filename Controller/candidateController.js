const Candidate = require("../Model/Candidate");

// Create a new candidate
exports.createCandidate = async (req, res) => {
  try {
    const {email,job}  =req.body
    const candidate = await Candidate.findOne({ email });

    if(candidate && candidate.job == job){
        return res.status(400).json({
            msg:"You Already Applyed in this job Role"
        })
    }

    const newCandidate = new Candidate(req.body);
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




// Get all candidates
exports.getAllCandidates = async (req, res) => {

    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit to 10
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10)
    };

    try {
        const candidates = await Candidate.find()
                                        .limit(options.limit)
                                        .skip((options.page - 1) * options.limit);

        const totalCandidates = await Candidate.countDocuments();

        const totalPages = Math.ceil(totalCandidates / options.limit);
        res.status(200).json({
            totalCandidates,
            totalPages,
            currentPage: options.page,
            candidates
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 

  // Get all candidates By Job Role
exports.getCandidatesByJobs = async (req, res) => {
    try {
      const candidates = await Candidate.find({
        job:req.params.id
      });
      res.status(200).json(candidates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  



   // Get a candidate by ID
   exports.getCandidateById = async (req, res) => {
    try {
      const candidate = await Candidate.findById(req.params.id);
      if (!candidate) {
        return res.status(404).json({ message: 'Candidate not found' });
      }
      res.status(200).json(candidate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  



// Delete a candidate
exports.deleteCandidate = async (req, res) => {
    try {
      const candidate = await Candidate.findByIdAndDelete(req.params.id);
      if (!candidate) {
        return res.status(404).json({ message: 'Candidate not found' });
      }
      res.status(200).json({
        message: "Candidate Deleted Successfully."
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  