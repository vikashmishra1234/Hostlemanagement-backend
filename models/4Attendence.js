import mongoose from "mongoose";

const Attendence1Schema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

export default mongoose.model('fourthAttendence',Attendence1Schema);