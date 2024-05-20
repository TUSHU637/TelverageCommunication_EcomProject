import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const navigate=useNavigate();
  const [pname,setPname]=useState("");
  const [price,setPrice]=useState();
  const [category,setCategory]=useState("");
  const [stars,setStars]=useState();
  const [boughtInLastMonth,setBoughtInLastMonth]=useState();
  const [imageFile,setImageFile]=useState()
  


//   const addProduct= async(e)=>{
//     console.log(pname,price,imageFile)
//     const imgfile=imageFile.name;
// //     let data=JSON.parse(localStorage.getItem("user"))
// //     console.log(data);
// //    let userId=data._id;
//     // if(imageLink==""){
//     //     setImageLink("https://agrimart.in/uploads/vendor_banner_image/default.jpg")
//     // }
//     e.preventDefault();
//     let res=await fetch("http://localhost:8000/api/addProduct",{
//       method:"POST",
//       headers:{
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify({pname,price,category,stars,boughtInLastMonth,imgfile}),
//     })
//     res=await res.json();
//     console.log(res);
//     if(res){
//         navigate("/");
//     }
 
//   }
const addProduct = async (e) => {
    e.preventDefault();
    console.log(imageFile)
    const formData = new FormData();
    formData.append('pname', pname);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stars', stars);
    formData.append('boughtInLastMonth', boughtInLastMonth);
    formData.append('imgfile', imageFile); // Append the file
  
    let res = await fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formData, // Send formData instead of JSON
    });
    res = await res.json();
    console.log(res);
    if (res) {
      navigate("/");
    }
  };
  return (
    <div className='addProduct'>
    <h1>AddProduct</h1>
    <input type="text" placeholder="Enter product name" value={pname} onChange={(e)=>setPname(e.target.value)}/>
    {!pname &&<span className='invalid'>Enter valid Name</span>}
    <input type="number" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    {!price &&<span className='invalid'>Enter valid price</span>}
    <input type="text" placeholder="Enter Category"value={category} onChange={(e)=>setCategory(e.target.value)}/>
    {!category &&<span className='invalid'>Enter valid Category</span>}
    <input type="text" placeholder="Enter Rating(stars)"value={stars} onChange={(e)=>setStars(e.target.value)}/>
    {!stars &&<span className='invalid'>Enter rating</span>}
    <input type="text" placeholder="Enter how many product brought in last month"value={boughtInLastMonth} onChange={(e)=>setBoughtInLastMonth(e.target.value)}/>
    {!boughtInLastMonth &&<span className='invalid'>Enter deatails</span>}
    <input type="file" placeholder="Enter Image"  onChange={(e)=>setImageFile(e.target.files[0])}/>
    <button className="button mt-2" onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct