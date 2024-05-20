const mongoose=require('mongoose')
const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    asin:{
        type:String,
        default:"B07GDLCQIV"
    },
    price:{
        type:Number,
         required:true
    },
    stars:{
         type:Number,
         required:true
    },
boughtInLastMonth:{
          type:Number,
},
    date:{
        type:Date,
       default:Date.now
    }

});
module.exports=mongoose.model("products",productSchema);