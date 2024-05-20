const express=require('express');
const router=express.Router();
router.get("/foodData",(req,resp)=>{

    try{
       // console.log(global.food_items,global.foodCategory)
        resp.send([global.product_items,global.productCategory]);
    }
    catch(err){
        resp.send("server error");
        console.error(err.message);
    }
    
})
module.exports=router;