const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

//Routers
router.post("/adduser", async(req,res)=>{
   try{
    const {name,role}= req.body;
    await UserModel.create({name,role});
    res.json({status:"sucess"})
   } catch(error){
    console.log("error:")
    res.status(500).json({ error: "Internal server error" });
   }
})


module.exports = router;