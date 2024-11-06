const express=require("express");
const router=express.Router();
const {handleGenerateNewShortUrl,handleGetAnalytic}=require("../controllers/url");


router.post("/",handleGenerateNewShortUrl); 

router.get("/analytics/:shortId", handleGetAnalytic); 

module.exports=router;
