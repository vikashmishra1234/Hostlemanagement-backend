import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    faculty_id:{
        type:String,
        required:true
    }


})

export default mongoose.model('faculty',facultySchema);
