const express = require('express')
const cors = require('cors')
const userRoute = require('./Router/userRouter')
const jobPostRoute = require('./Router/jobPostRouter')
const candidateRoute = require('./Router/candidateRouter')
const enquiryRouter = require('./Router/enquiry.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/auth',userRoute)
app.use('/api/v1/job_post',jobPostRoute)
app.use('/api/v1/candidate',candidateRoute)
app.use('/api/enquiry',enquiryRouter)

app.get('/',(req,res)=>{
res.send("ok")
})

module.exports = app
