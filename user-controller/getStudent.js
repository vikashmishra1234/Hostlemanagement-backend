import Student from "../models/Student.js";

const getStudent = async(req,res)=>{

    try {
        const StudentData = await Student.find({})
        return res.status(200).json(StudentData)
    } catch (error) {
        return res.json({error:"uable to find the student"})
    }

  

}

export default getStudent;