const express = require("express")
const cors = require("cors")
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

const app = express()

app.use(express.json())
app.use(cors(corsOptions))


//Routes
const authRoutes= require('./routes/Auth')

//declare Api category endpoints
app.use('/api/auth',authRoutes)

const port =process.env.PORT || 5000
app.listen(port,console.log(`Server is running on port ${port}`))