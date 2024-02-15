import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  
    Name:{
        type:String,
        required:true
    },
  
 
    Year:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true
    }
 
    
})

export default mongoose.model('student',studentSchema);