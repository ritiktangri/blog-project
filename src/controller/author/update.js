const Authormodel=require('../../model/authorSchema')
// const {objectId}=require("mongoose").Types;
const updateAuthor=async(req,res)=>{
    try {
        const _id=req.params.id;
        const up=req.body
        const updateAuthor=await Authormodel.findByIdAndUpdate(
            _id,
            up,
            {new:true}
        );
        res.send(updateAuthor) 
    } catch (error) {
        return res.status(500).send('error');
        console.log(error)
    }
}
module.exports=updateAuthor
