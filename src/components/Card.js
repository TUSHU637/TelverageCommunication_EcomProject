import React, {  useState ,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';
import { useCart,useDipsatchCart } from './ContextReducer';
import ProductDetail from '../screen/ProductDetail';

function Card({foodData}) {
  const [check,setcheck]=useState(false);
  let dispatch=useDipsatchCart();
  let data=useCart();
   const [qty,setqty]=useState(1);
 
 
  const handleCart = async () =>{
     console.log("dmk")
     alert("Item successfully added to cart!")
     await dispatch({type:"ADD",id:foodData._id,name:foodData.title,price:finalPrice,qty:qty,img:foodData.imgUrl});  
      
    // console.log(data)
     setcheck(!check);
    }

    if(check){
      console.log(data)
      setcheck(!check)
    }
  let finalPrice=qty*foodData.price;
  
 // console.log(data)w
  return (
    <div>
    <div className="card h-150 ml-2" style={{"width": "25rem ","box-shadow":" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
      <img src={foodData.imgUrl} className="card-img-top img-fluid" alt="..." style={{height:"350px",objectFit:"fill"}}/>
      <div className="card-body ">
        <h5 className="card-title">{foodData.title}</h5>
        <p className="card-text">{foodData.title}</p> {/* Assuming you have a description field */}
        <Link to={`/productDetail/${foodData._id}`}  className="btn p-1 btn-primary">Get Product Details</Link>

        <div className='container w-100 d-inline h-100 fs-3  '>
          <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
            {Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
          </select>
          <div className='d-inline h-100 fs-2'>
           ${finalPrice}/-
          </div>
          <div className='d-flex mt-4 h-100 fs-4 justify-content-around'>
             <h6>Rating:&nbsp;{foodData.stars}/5</h6>
             <h6>LastMonthSell:&nbsp;{foodData.boughtInLastMonth}</h6>
          </div>
        </div>
        <hr />
        <div className='text-center'>
        <button className='btn btn-success w-100 justify-center' onClick={handleCart}>ADD TO CART</button>
        </div>      
      </div>
    </div>
    {/* ... other cards ... */}
  </div>
  )
}

export default Card