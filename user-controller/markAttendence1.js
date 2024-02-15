import firstYear from '../models/1Attendence.js';

const markattendece1 = async(req,res)=>{
   let today = new Date();
   let year = today.getFullYear();
   let month = today.getMonth() + 1;
   let date = today.getDate();

   let tarik = year + "-" + month + "-" + date;

   try {
      const exist = await firstYear.findOne({Mobile:req.body.Mobile,createdAt:{$gte:`${tarik}`}})
      if(exist){
         return res.json({success:false, error:"Marked already"});
      }
    const newStudent = await firstYear(req.body) ;
    await newStudent.save()
    console.log("saved success fully")
    return res.json({success:true,message:'marked successfully'})

   } catch (error) {
    return res.json({error:error.message,success:false})
    
   }
   

}

export default markattendece1;
























// import Attendence from '../models/csAttendence.js';
// import sendEmailcs from '../mails/CSmail.js';
// const markAttendence = async(req,res)=>{



//    const Students = req.body;
   
//    try {
//        let today = new Date()
//        let year = today.getFullYear();
//        let month = today.getMonth()+1;
//        let date = today.getDate()

//        let Tarik = year+'-'+month+'-'+date
      
       

//     // let Delete = await Attendence.deleteMany({})
//     // console.log(Delete)
//     let One = await Attendence.findOne({createdAt:{$gte:`${Tarik}`}})
//     if(One){
        
//         return res.status(202).json({error:"Attendence Already Marked"})
//     }
   

    
//     Students.forEach(async(element) => {
//         let newStudent =  await Attendence(element);
//         await newStudent.save();
//         });
//         sendEmailcs()
//         return res.json({message:'Marked Successfully'})

  
    
//    } catch (error) {
//     return res.json({error:error.message})
    
//    }


// }

// export default markAttendence;