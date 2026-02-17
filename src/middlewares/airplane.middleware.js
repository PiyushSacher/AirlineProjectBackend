const {StatusCodes}=require("http-status-codes");
const {errorResponse}=require("../utils/common");

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        errorResponse.message="Something went wrong while creating the airplane";
        errorResponse.error="Model number not found in proper format from the incoming request";
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}