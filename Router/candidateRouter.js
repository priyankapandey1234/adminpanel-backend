const express = require('express');
const { createCandidate, getAllCandidates, getCandidateById, getCandidatesByJobs, deleteCandidate } = require('../Controller/candidateController');
const { authenticate } = require('../Controller/userController');
const candidateRoute = express.Router();


candidateRoute.post('/', createCandidate);
candidateRoute.get('/',authenticate, getAllCandidates);
candidateRoute.get('/:id',authenticate, getCandidateById);
candidateRoute.get('/job/:id',authenticate, getCandidatesByJobs);
candidateRoute.delete('/:id',authenticate, deleteCandidate);

module.exports = candidateRoute;
