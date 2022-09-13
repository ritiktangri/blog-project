const model=require('../../model/blogSchema')
const express=require('express')

const createblog=async(req,res)=>{
    try {
        const user=req.body

        // if(!req.user.email){
        //     return res.status(404).send({
        //         status:false,msg:"enter valid email"
        //     })
        // }
        const blog=new model(user)
        await blog.save()
        res.status(200).send(blog)
    } catch (error) {
        res.status(404).send(console.log(error))
    }
}
module.exports=createblog