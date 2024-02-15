import Jwt from "jsonwebtoken";
const secretKey = "vikash mishra";
const verifyToken = (req,res,next)=>{
   
    let bearerHeader = req.headers['authorization'];

    try {
        if(typeof (bearerHeader)!=='undefined'){
        

            let bearer= bearerHeader.split(" ");
            const token = bearer[1];
            Jwt.verify(token,secretKey,(err,success)=>{
                if(err){
                    return res.status(401).json({error:"invalid token"})
                }
                else{
                    next()
                }
            })
           
           
        }
        else{
    
           return res.json({error:"no token found"})
        }
        
    } catch (error) {
        console.log(error.message)
        return res.json({error:"no token found"})
    }

    
}

export default verifyToken