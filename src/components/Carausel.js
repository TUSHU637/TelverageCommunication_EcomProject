import React from 'react'
function Carausel({CarauselHandle}) {
  return (
   <div>
   <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{"objectFit":"contain"}} data-bs-interval="1500" data-bs-ride="carousel">
  <div className="carousel-inner" style={{"maxHeight":"500px"}}>
  <div className='carousel-caption' style={{'zIndex':"10"}}>
  <div class="d-flex">
      <input class="form-control me-2 p-2 fs-5" type="search" placeholder="Search anything...." aria-label="Search" onChange={(e)=>CarauselHandle(e.target.value)} />
      {/* <button class="btn btn-outline-success text-white fs-3 bg-success" type="submit">Search</button> */}
  </div>
  </div>
    <div className="carousel-item active">
      <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg" style={{"height":"500px"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn5.vectorstock.com/i/1000x1000/83/89/time-to-travel-traveling-luggage-bag-banner-vector-25668389.jpg" style={{"height":"540px"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/cb/31/87/cb318789eecdbe77c9375cf78ba0f25e.jpg" style={{"height":"490px"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/D131955197_IN_WLD_Mi_Family_BAU_1400x800_serie_1._SX414_QL85_.jpg" style={{"height":"490px"}} className="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carausel