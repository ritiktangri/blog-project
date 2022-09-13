const blogmodel=require("../../model/blogSchema")
const getBlog=async function(req,res){
    try {
        let query=req.query;

        const filterByQuery=await blogmodel.find(query)
        if(!filterByQuery.length===0){
            return res.status(404).send({status:false,message:"not found"})
        }
        return res.status(200).send({status:true,message:"details fetched" ,data:filterByQuery})

    } catch (error) {
        console.log(error);
    }
}

module.exports=getBlog