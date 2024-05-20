import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const [credential,setCredential]=useState({name:"",email:"",password:"",address:""})
    const navigate=useNavigate()
    const handelChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value});
        }
    const handleSubmit=async(e)=>{
            e.preventDefault(); 
            const resp=await fetch("http://localhost:8000/api/createUser",{
                  method:'POST',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({name:credential.name,email:credential.email,password:credential.password,location:credential.address})
            }
            )
            let result=await resp.json()
            if(!result.success){
                alert("Enter valid Crendentials");
            }
            else{
              localStorage.setItem("email",credential.email)
                navigate("/")
                alert("!!Hurray SucessFUlly signup");   

            }
     }
  return (
    <>
    <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
   <div class="mb-3">
    <label htmlFor="name" class="form-label">name</label>
    <input type="text" name="name" class="form-control" value={credential.name} id="name" onChange={handelChange} required="true"/>
  </div>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email</label>
    <input type="email" name="email" class="form-control"value={credential.email} onChange={handelChange} id="email" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label htmlFor="Password" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" value={credential.password} onChange={handelChange} id="Password" />
  </div>
  <div class="mb-3">
    <label htmlFor="address" class="form-label">address</label>
    <input type="text" name="address" class="form-control" value={credential.address} onChange={handelChange}id="address" />
  </div>
  <button type="submit" class="btn btn-primary m-2">Submit</button>
  <Link className="nav-link d-inline btn-danger text-white fw-700" to="/login">Already a user</Link>
</form>
</div>
    </>

  )
}

export default Signup