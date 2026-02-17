const express=require("express");
const v1Router=express.Router();
const {InfoController}=require("../../controllers")
const airplaneRoute=require("./airplane.route");

v1Router.get("/info",InfoController.info);
v1Router.use("/airplanes",airplaneRoute);



module.exports=v1Router;
