const {AirplaneService}=require("../services");
const {StatusCodes}=require("http-status-codes");
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function createAirplane(req,res){
    try{
        console.log(req.body);
        const airplane= await AirplaneService.createAirplane(req.body);
        res.status(StatusCodes.CREATED).json({
            sucess:true,
            message:"Airplane created successfully",
            data:airplane,
            error:{}
        });
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            sucess:false,
            message:"Something went wrong",
            data:{},
            error:err
        });
    }
}

module.exports={
    createAirplane
};
