const express = require('express')
const main=require('./db');
const path=require('path')
const app = express()
require('dotenv').config();
app.use(express.json());
app.use(express.static(path.resolve("./public")))
const PORT=process.env.PORT || 9000
//to handle cors policy
app.use((req,resp,next)=>{
resp.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
resp.header(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With,Content-Type,Accept"
);
next();
})

app.use("/api",require("./Routes/CreateUser"));
app.use("/api",require("./Routes/DisplayData"));
app.use("/api",require("./Routes/OrderDetails"));
app.use("/api",require("./Routes/AddProduct"));
app.get('/', async(req, res) => {
res.send("dkk")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

