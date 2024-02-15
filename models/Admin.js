import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
})

export default mongoose.model('admin',adminSchema);