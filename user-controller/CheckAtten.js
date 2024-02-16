import firstYear from '../models/1Attendence.js';
import secondYear from '../models/2Attendece.js';
import fourthYear from '../models/4Attendence.js';
import thirdYear from '../models/3Attendence.js';


 const CheckAtten = async(req,res)=>{

    try {

        const first = await firstYear.findOne({Mobile:req.body.Phone,createdAt:{$gte:`${req.body.Date}`}})
        const second = await secondYear.findOne({Mobile:req.body.Phone,createdAt:{$gte:`${req.body.Date}`}})
        const third = await thirdYear.findOne({Mobile:req.body.Phone,createdAt:{$gte:`${req.body.Date}`}})
       const fourth = await fourthYear.findOne({Mobile:req.body.Phone,createdAt:{$gte:`${req.body.Date}`}})

       if(first || second||third || fourth){

           return res.json({message:"Student Present"})
       }
        return res.json({error:"Not Present"})
    } catch (error) {
        return res.json({error:error.message})
    }

}
export default CheckAtten;