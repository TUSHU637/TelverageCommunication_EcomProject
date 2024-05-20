const express=require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const User=require('../models/User');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


router.post('/createUser', [
body('email').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 8 })],
async(req, resp) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resp.status(400).json({ errors: errors.array() });
  }
  let salt=await bcrypt.genSalt(10);
  let setPassword=await bcrypt.hash(req.body.password,salt)
try{
  User.create({
    // name:"rahul",
    // location:"kefkem",
    // email:"tuhsu@123gmail.com",
    // password:"1233",
        name:req.body.name,
        location:req.body.location,
        email:req.body.email,
        password:setPassword,
        
  })
  console.log("hello")
  resp.send({success:true});
    
}
// let data=new User(req.body);
// let result=await data.save();
//   resp.send({success:true});
//   console.log("sucessfully insered")
// }
catch(err){
    console.log(err);
    resp.send({success:false});
}


})

router.post('/loginUser', [
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 })],
  async(req, resp) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }
  try{
    const userData=await User.findOne({  email:req.body.email})
    if(!userData){
      return resp.status(400).json({ errors:"invalid user" });
  }
  let pwdcompare=await bcrypt.compare(req.body.password,userData.password);//return true/false
  if(!pwdcompare){
    return resp.status(400).json({ errors:"invalid password" });
  }
  let data={
     user:{
      id:userData.id
     }
  }
  const authToken=jwt.sign(data,process.env.JWTSECRET);
  return resp.send({success:true,authToken:authToken});
}
  catch(err){
      console.log(err);
      resp.send({success:false});
  }
  })
module.exports=router;