const dotenv=require("dotenv");
dotenv.config();

module.exports={
    //eslint-disable-next-line
    PORT:process.env.PORT || 8000
};
