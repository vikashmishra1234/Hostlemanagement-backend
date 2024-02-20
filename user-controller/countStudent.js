import Student from "../models/Student.js";
const countStudent = async(req,res)=>{
    try {
        const Students = await Student.countDocuments();
        if(!Students){

            return res.json({Students:Students})
        }
        return res.json({Students:Students})

    } catch (error) {
        return res.json({error:error.message})
        
    }

}

export default countStudent;