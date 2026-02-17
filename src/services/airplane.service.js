const { StatusCodes } = require("http-status-codes");
const {AirplaneRepository}=require("../repositories");
const createAppError = require("../utils/errors/app.error");


const airplaneRepository= new AirplaneRepository();
async function createAirplane(data){
    try{
        const airplane=await airplaneRepository.create(data);
        return airplane;
    }catch (err) {

        // Sequelize Validation Error Handling
        if (err.name === "SequelizeValidationError") {

            const explanation = err.errors.map(e => e.message);

            throw createAppError(
                "Cannot create airplane",
                StatusCodes.BAD_REQUEST,
                explanation
            );
        }

        // Generic DB error
        throw createAppError(
            "Something went wrong while creating airplane",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports={
    createAirplane
};
