import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
  
    branch:{
        type:String,
        required:true
    }
    
})

export default mongoose.model('student',studentSchema);