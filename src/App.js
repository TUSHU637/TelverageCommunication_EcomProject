import './App.css';
import Home from './screen/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screen/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import Cart from './components/Cart.js';
import MyOrder from './screen/Myorder.js';
import AddProduct from './components/AddProduct.js';
import ProductDetail from './screen/ProductDetail.js';
import { useEffect, useState } from 'react';
function App() {
  const [foodItem,setFoodItem]=useState([]);
  const [foodCategory,setFoodCategory]=useState([]);
  const LoadData=async()=>{
    const response=await fetch("http://localhost:8000/api/foodData",{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    const res=await response.json();
    // console.log(res);
    setFoodItem(res[0]);
    setFoodCategory(res[1]);


  }
  useEffect(()=>{
    LoadData();
    },[])
  return (
    <CartProvider>
   <BrowserRouter>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Home foodItem={foodItem} foodCategory={foodCategory}/>} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/addProduct" element={<AddProduct />} />
    <Route exact path="/createUser" element={<Signup />} />
    <Route exact path="/myOrder" element={<MyOrder />} />
    <Route exact path="/productDetail/:id" element={<ProductDetail foodItem={foodItem}/>} />
     </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
