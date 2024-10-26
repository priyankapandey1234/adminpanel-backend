const app = require("./app");
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

//database configuration 
const db_url = process.env.DATA_BASE
mongoose.connect(db_url)
.then(()=>{
    console.log(`DataBase Connected Successfully`);
    
})
.catch((err)=>{
    console.log(`Error: ${err}`);
    
})








const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is Running on Port: ${port}`);
})