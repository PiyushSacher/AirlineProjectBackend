const express=require("express");
const v1Router=express.Router();
const {InfoController}=require("../../controllers")

v1Router.get("/info",InfoController.info);

module.exports=v1Router;
