const {StatusCodes}=require("http-status-codes")

const info=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Welcome to API version 1.0",
        error:{},
        data:{},
    });
}

module.exports={info};
