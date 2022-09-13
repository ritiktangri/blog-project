const jwt= require("jsonwebtoken")
const authorModel=require('../../model/authorSchema')
const login=async(req,res)=>{
    try {
        const user=req.body
        let {
            email,password
        }=user; 

        let findUser= await authorModel.findOne({
            email,password
        })
        if(!findUser)
        return res.status(400).send({
            status:false,msg:"userpassword not found"
        });
        let token=jwt.sign({
            userId:findUser._id,
            email:findUser.email
        },"project-1")
        console.log(token)
        
     res.header ("token-is-created",token)
        res.status(201).send({
            status:true,
            data:token
        })
    } catch (error) {
       return res.status(500).send({
            status:false,
            msg:console.log(error)
        })
    }
    
}
// console.log("your are login in succesfully and now to go verfiy part")
module.exports=login