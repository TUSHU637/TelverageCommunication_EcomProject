import React, { useContext } from 'react'
import Statecontext from './Card';
import { useCart, useDipsatchCart } from './ContextReducer';

function Cart() {
  let data=useCart();
  let dispatch=useDipsatchCart();
  if(data.length===0){
    console.log("kndkndk")
    return(
      <div>
      <div className='text-center  my-3 fs-3 text-danger'>The Cart is Empty!</div>
      </div>
    )
  }
  let totalprice=data.reduce((total,food)=>total+food.price,0);
  console.log(totalprice)
  const handleCheckout=async()=>{
    let userEmail=localStorage.getItem("email");
    const resp=await fetch("http://localhost:8000/api/orderData",{
       method:"POST",
       headers:{
        'Content-Type':"application/json"
       },
       body: JSON.stringify({
         "order_data":data,
          "order_date":new Date().toDateString(),
          "email":userEmail
       })
    })
    if(resp.status===200){
      await dispatch({type:"DROP"});
    }
  }
  return (
    
    <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Qunatity</th>
      <th scope="col">amount</th>
    </tr>
  </thead>
  <tbody>
    {data.map((food,index)=>(
           <tr>
      <th scope="row">{index+1}</th>
      <td>{food.name}</td>
      <td>{food.qty}</td>
      <td>{food.price}</td>
      <td><button onClick={()=>{dispatch({type:'Remove',index:index})}}>Delete</button></td>
          </tr>
    ))}
  </tbody>
  </table>
  <div><h1 className='text-success fs-2 fw-bold'>TotalPrice is:${totalprice}/-</h1></div>
  <div>
    <button className='btn-outline btn-success mt-5' onClick={handleCheckout}>Check out</button>
  </div>
    </div>
  )
}

export default Cart