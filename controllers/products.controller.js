const getAllProducts = async(req,res)=>{
    res.status(200).json({"msg":"it working bro"});
}
const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({"msg":"it working bro ????"});
}

module.exports = {getAllProducts,getAllProductsTesting};