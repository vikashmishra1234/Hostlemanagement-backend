const verifyToken = (req,res,next)=>{
   
    const bearerHeader = req.headers['authorization'];

    try {
        if(typeof (bearerHeader)!=='undefined'){
        

            const bearer= bearerHeader.split(" ");
            const token = bearer[1];
            req.token = token;
           
            next();
        }
        else{
    
           return res.json({error:"no token found"})
        }
        
    } catch (error) {
        console.log(error.message,"error")
        return res.json({error:"no token found"})
    }

    
}

export default verifyToken