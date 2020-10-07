require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const subscriberRouter = require("./routes/subscriber")
const app = express()
const port = process.env.PORT || 5000
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true } )
const db = mongoose.connection
db.on('error',(error)=>{console.error(error)})
db.once('open',() => {console.log("db is connected")})
app.use(bodyParser.json())
app.use("/subscriber", subscriberRouter)
app.listen(port,() => {console.log(`Listening on ${port}`)})