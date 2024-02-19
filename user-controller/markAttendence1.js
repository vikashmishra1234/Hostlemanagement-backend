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























