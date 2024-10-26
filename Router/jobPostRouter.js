const express = require('express')
const { createJobPost, getAllJobPosts, editJobPostByID, getSingleJobPost, deleteSingleJobPost } = require('../Controller/jobPostController')
const { authenticate } = require('../Controller/userController')
const jobPostRoute = express.Router()


jobPostRoute.route('/')
            .post(authenticate,createJobPost)
            .get(getAllJobPosts)

jobPostRoute.route('/:id')            
            .patch(authenticate,editJobPostByID)
            .get(getSingleJobPost)
            .delete(authenticate,deleteSingleJobPost)





module.exports = jobPostRoute