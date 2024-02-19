import Student from "../models/Student.js";


const addStudent = async (req, res) => {
  try {
    console.log(req.body);
    const studentExist = await Student.findOne({ Mobile: req.body.Mobile });
    if (studentExist) {
      return res.json({ error: "student already exist" });
    }
    const studentInfo = await Student(req.body);
    await studentInfo.save();

    return res.status(200).json({ message: "Student Save Successfully" });
  } catch (error) {
    return res.status(202).json({ error: "something went wrong" });
  }
};

export default addStudent;
