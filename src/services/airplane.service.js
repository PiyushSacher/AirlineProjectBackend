const {AirplaneRepository}=require("../repositories");


const airplaneRepository= new AirplaneRepository();
function createAirplane(data){
    try{
        const airplane=airplaneRepository.create(data);
        return airplane;
    }catch(err){
        throw err;
    }
}

module.exports={
    createAirplane
};
