const express=require('express');
const router=express.Router();
const Product=require('../models/product');
const multer=require('multer')
const path=require('path')
router.use(express.urlencoded({extended:false}))
const storage=multer.diskStorage({
    destination:function(req,resp,cb) {
        console.log("jnefjf")
       return cb(null,path.resolve('../public/uploads/'))
    },
   filename: function (req, file, cb) {
       console.log(file.originalname)
       const filename=`${Date.now()}-${file.originalname}`;//file.originalname
       return cb(null,filename); 
     },
   })

const upload = multer({ storage: storage });//jaise ji request aati h ho agar request me koi file h toh multer middleware run ho jaata h

router.post('/addProduct',upload.single('imgfile'),async(req,resp)=>{
   // console.log("filedata",req.file)
   const body = JSON.parse(JSON.stringify(req.body));
   //console.log("filedata",req.file)
   // Now you can access the form fields as a regular object
    Product.create({
    title:body.pname,
    price:body.price,
    category:body.category,
    stars:body.stars,
    boughtInLastMonth:body.boughtInLastMonth,
    imgUrl:`/uploads/${req.file.filename}`
   })
   resp.send({success:true});

   
})
module.exports=router;