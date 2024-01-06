import { validationResult } from 'express-validator';
import Student from '../models/Student.js';
import jwt from 'jsonwebtoken';

const secretKey = "vikash mishra"


const addStudent = async(req,res)=>{

    await jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
           return res.status(202).json({error:"invalid token"})
        }
    })
    
    try {

        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
                return res.status(202).json({error:'invalid credentials'});
                // return res.status(202).json({error:errors.array()});
        }
   
   
        const studentData = await Student.findOne({rollno:req.body.rollno});
        const studentEmail = await Student.findOne({email:req.body.email});
        if(studentData ){
            return res.status(202).json({error:"student already exits"});
        }
        if(studentEmail ){
            return res.status(202).json({error:"This Email Already Exist"});
        }
        console.log(req.body)
        const studentInfo =  await Student(req.body);
        await studentInfo.save()
     
    
        return res.status(200).json({message:"Student Save Successfully"});
    } catch (error) {

        return res.status(202).json({error:"something went wrong"});
        
    }




}

export default addStudent;