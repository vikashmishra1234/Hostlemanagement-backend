 import jwt from 'jsonwebtoken';
import faculty from '../models/Faculty.js'
 import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

 const secretKey = 'vikash mishra';
 
 const facultyLogin = async(req,res)=>{

    const result = validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).json({error:result.array()});
    }
    console.log(req.body)

    let Name = req.body.name;
     let password = req.body.password;

    try {
        const user = await faculty.findOne({name:Name});
        const exit = await bcrypt.compare(password,user.faculty_id);

        if(!exit){
            return res.status.json({error:'Faculty does not exits'});
        }

        const data = {
            id:user._id,
            username:user.name

        }


       const token= await jwt.sign({data},secretKey);
       
        
        return res.json({token:token,message:'login successfull'});

        
    } catch (error) {

        console.log("could not find from inthe datbase",error)

        return res.json({error:"login failed"})
        
    }



   

}

export default facultyLogin