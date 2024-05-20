import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

function ProductDetail({foodItem}) {
 
    const { id } = useParams();
   const data=foodItem.filter((item)=>{
    return (item._id===id)
   })

   const relateddata=foodItem.filter((item)=>{
    return (item.category===data[0].category)
   })

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  //  console.log(data[0].title)
   console.log(relateddata)
  
 
  return (
     <>
      <div><Navbar /></div>
    
    <div className="container mt-6">
    {/* Product Details  */}
  
    <div className=" mt-3 row">
      <div className="geeks col-md-4 text-center mt-5">
        <img src={data[0].imgUrl} className="img-fluid" alt="Product Image" style={{"width":"50%","borderRadius":"10px"}}/>
      </div>
      <div class="col-md-6">
        <h2 class="mb-3">{data[0].title}</h2>
        <p class="lead">{data[0].category}</p>
        <p class="h4 mb-3">{data[0].price}</p>
        <p>Rating:{data[0].stars}</p>
         <button className='btn btn-success w-100 justify-center'>ADD TO CART</button>
      </div>
    </div>
     {/* <!-- Related Products --> */}
    <br />
    <br />
    <br />
    <br />
    
     <h3 className=" mb-5 mt-5">Related Products</h3>
  
     <div className="container mt-2">
  <div className="row">
    {relateddata.map((reldata) => (
      <div key={reldata._id} className="col-12 col-md-6 col-lg-4">
        <Card foodData={reldata} />
      </div>
    ))}
  </div>
</div>

</div>

         
          </>

  )
}

export default ProductDetail