import Student from '../models/Student.js';
const updateStudent = async(req,res)=>{
    try {
        let exits = await Student.findOne({Mobile:req.body.Phone});
        if(!exits){
            return res.json({error:"Student is not exist"})
        }
        let removeStu = await Student.deleteOne({Mobile:req.body.Phone});
        console.log(removeStu);
        return res.json({message:"Removed Successfully"})

    } catch (error) {
        console.log(error.message);
        return res.json({error:"unable to remove this time"})
        
    }


}

export default updateStudent;