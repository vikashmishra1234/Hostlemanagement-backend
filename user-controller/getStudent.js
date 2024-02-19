import Student from "../models/Student.js";

const getStudent = async(req,res)=>{

    try {
        const StudentData = await Student.find({})
        if(StudentData){

            return res.status(200).json(StudentData)
        }
        return res.json({error:'Does not found any student'})
    } catch (error) {
        return res.json({error:"uable to find the student"})
    }

  

}

export default getStudent;