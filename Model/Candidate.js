const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  current_company: {
    type: String,
    required: true
  },
  notice_period: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  expected_package: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    default: []
  },
  cv_link: {
    type: String
  },
  job:{
    type:mongoose.Types.ObjectId,
    ref:'JobPost',
    required: true

  }
},{timestamps:true});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
