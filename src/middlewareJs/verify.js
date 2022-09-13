const Authormodel=require('../model/authorSchema')
const jwt=require('jsonwebtoken')

  
const authorization=(req,res,next)=>{
    try {
        let token=req.headers["token-is-created"]
        console.log("user verified and now you can update"+token)
        if (!token)
        return res.status(401).send({status:false,msg: console.log("me nai chloga kerlo jo krna")})

        let decodedToken=jwt.verify(token,"project-1")
        if (!decodedToken)
        return res.status(401).send({status:false,msg:"token is invalid"}) 
 
        let userModified=req.params.id;
        let userLoggedIn=decodedToken.id;
        if(!userModified==userLoggedIn)
        return res.status(400).send({status:false,msg:"user is valid for logged in"});
        next();
        
    } catch (error) {
        res.status(500).send({status:false,msg:error.message})
    }
    
};

module.exports=authorization