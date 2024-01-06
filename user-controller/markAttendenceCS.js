import Attendence from '../models/csAttendence.js';
import sendEmailcs from '../mails/CSmail.js';
const markAttendence = async(req,res)=>{



   const Students = req.body;
   
   try {
       let today = new Date()
       let year = today.getFullYear();
       let month = today.getMonth()+1;
       let date = today.getDate()

       let Tarik = year+'-'+month+'-'+date
      
       

    // let Delete = await Attendence.deleteMany({})
    // console.log(Delete)
    let One = await Attendence.findOne({createdAt:{$gte:`${Tarik}`}})
    if(One){
        
        return res.status(202).json({error:"Attendence Already Marked"})
    }
   

    
    Students.forEach(async(element) => {
        let newStudent =  await Attendence(element);
        await newStudent.save();
        });
        sendEmailcs()
        return res.json({message:'Marked Successfully'})

  
    
   } catch (error) {
    return res.json({error:error.message})
    
   }


}

export default markAttendence;