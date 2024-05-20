const mongoose=require('mongoose');
const main=async()=>{
     const MONGOURL="mongodb://0.0.0.0:27017/E-comm";
     
    //const MONGOURL=process.env.MONGOLOCALURL  //NOT WORKING CHECK IT LATER
    await mongoose.connect(MONGOURL)
    const fetchData= mongoose.connection.db.collection("products");
    const res=await fetchData.find({}).toArray();
    const fetchFoodCategory= mongoose.connection.db.collection("productCategory");
    const result=await fetchFoodCategory.find({}).toArray();
    global.product_items=res;
    global.productCategory=result;

}
module.exports=main();