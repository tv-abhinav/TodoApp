const mongoose = require("mongoose")
const noteSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    noteText:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        default:Date.now
    }
})
module.exports=mongoose.model("Note",noteSchema)