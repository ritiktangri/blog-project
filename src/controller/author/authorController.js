const authorSchema= require ('../../model/authorSchema')

const createauthor=async(req,res)=>{
    try {
        const user=req.body
        const author=new authorSchema(user)
        await author.save()
        res.status(200).send(author)
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports=createauthor