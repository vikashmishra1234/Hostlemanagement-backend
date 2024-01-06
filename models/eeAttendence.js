import mongoose from "mongoose";

const AttendenceSchema = new mongoose.Schema({
  Rollno: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Section: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
},
{
    timestamps:true
}
);

export default mongoose.model('EEattendence',AttendenceSchema);
