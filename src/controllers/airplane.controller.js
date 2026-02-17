const {AirplaneService}=require("../services");
const {StatusCodes}=require("http-status-codes");
const {errorResponse, successResponse}=require("../utils/common");
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function createAirplane(req,res){
    try{
        console.log(req.body);
        const airplane= await AirplaneService.createAirplane(req.body);
        res.status(StatusCodes.CREATED).json(successResponse(airplane,"Airplane created"));
    }catch(err){
        res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
           .json(errorResponse(err.message, err));
    }
}

module.exports={
    createAirplane
};
