import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './Cart';
import Badge from 'react-bootstrap/Badge';
import { useCart } from './ContextReducer';
import Modal from '../Modals';

function Navbar() {
  let data=useCart();//custom hook
  const navigate=useNavigate();
  const [cartView,setCartView]=useState(false);
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 fw-bold" to="/">Browse<em>Bazaar </em></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active fs-3 " aria-current="page" to="/">Home</Link>
        {localStorage.getItem("authToken")?<div className='d-flex'>
        <Link className="nav-link  fs-3 " to="/myOrder">MyOrder</Link>
        <Link className="nav-link  ml-2 fs-3" to="/addProduct">Add Product</Link>
        </div>:""}

        <div style={{position:"absolute",right:"0"}}>
        {!localStorage.getItem("authToken")?
        <div className=' d-flex '>
        <Link className="nav-link btn bg-white text-success mx-1 my-2" to="/login">Login</Link>
        <Link className="nav-link btn bg-white text-success mx-1 my-2" to="/createUser">Sign up</Link>
        </div>
        :
        <div className=' d-flex '>
        <div className="nav-link btn bg-white text-success mx-1 my-2" onClick={()=>setCartView(true)}>
        MyCart{ " "}<Badge pill bg="danger"  >{data.length}</Badge></div>
        {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
        <Link className="nav-link btn bg-white text-success mx-1 my-2" to="/login" onClick={handleLogout}>Logout</Link>
        </div>
        }
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar