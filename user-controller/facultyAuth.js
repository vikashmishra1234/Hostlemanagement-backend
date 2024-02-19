import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import bcrypt, { genSalt } from "bcrypt";

const secretKey = "vikash mishra";

const FacultyLogin = async (req, res) => {
  
  try {
    const user = await Admin.findOne({ userName: req.body.userName });
    if (!user) {
      return res.json({ error: "Invalid Name" });
    }
    const PassCom = await bcrypt.compare(req.body.Password, user.Password);
    if (!PassCom) {
      return res.json({ error: "Password does not match" });
    }

    if (user && PassCom) {
      const data = {
        id: user._id,
        username: user.userName,
      };

      const token = await jwt.sign({ data }, secretKey);
    //   const token = await jwt.sign({ data }, secretKey, { expiresIn: "2h" });
      const options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res
        .cookie("token", token, options)
        .json({ token: token, message: "login successfull" });
    }
  } catch (error) {
      
      console.log(error.message);
    return res.json({ error: "Login Failed" });
  }
};

export default FacultyLogin;

//  import jwt from 'jsonwebtoken';
// import Admin from '../models/Admin.js'
//  import bcrypt from 'bcrypt';
// import { validationResult } from 'express-validator';

//  const secretKey = 'vikash mishra';

//  const facultyLogin = async(req,res)=>{

//     const result = validationResult(req)
//     if(!result.isEmpty()){
//         return res.status(400).json({error:result.array()});
//     }
//     console.log(req.body)

//     let Name = req.body.name;
//      let password = req.body.password;

//     try {
//         const user = await Admin.findOne({name:Name});
//         const exit = await bcrypt.compare(password,user.faculty_id);

//         if(!exit){
//             return res.status.json({error:'Password does not match'});
//         }

//         const data = {
//             id:user._id,
//             username:user.userName

//         }

//        const token= await jwt.sign({data},secretKey);

//         return res.json({token:token,message:'login successfull'});

//     } catch (error) {

//         console.log("could not find from inthe datbase",error)

//         return res.json({error:"login failed"})

//     }

// }

// export default facultyLogin


//signup
// try {

//     const salt = await bcrypt.genSalt(10);
//     const hashPass = await bcrypt.hash(req.body.Password, salt);
//     console.log(hashPass);

//     const newAdmin = await Admin.create({
//         userName:req.body.userName,
//         Password:hashPass
//     })
//     console.log(newAdmin)

//     const data = {
//       id: newAdmin._id,
//       username: newAdmin.userName,
//     };

//     const token = await jwt.sign({ data }, secretKey,{expiresIn:"2h"});

//     return res.json({token:token,message:'signUp successfull'});
// } catch (error) {
//     return res.json({error:error.message})

// }
//};
