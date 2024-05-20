import React from 'react'
import { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';

function Login() {
 const [credential,setCredential]=useState({email:"",password:""})
 const navigate=useNavigate();
 const handelChange=(e)=>{
     setCredential({...credential,[e.target.name]:e.target.value});
     }
 const handleSubmit=async(e)=>{
         e.preventDefault(); 
         const resp=await fetch("http://localhost:8000/api/loginUser",{
               method:'POST',
               headers:{
                 'Content-Type':'application/json'
               },
               body:JSON.stringify({email:credential.email,password:credential.password})
         }
         )
         let result=await resp.json()
         if(!result.success){
             alert("Enter valid Crendentials");
         }
         else{
            localStorage.setItem("authToken",result.authToken)
             navigate("/");  
             console.log(localStorage.getItem("authToken"))
         }
  }
return (
 <>
 <div className='container mt-5'>
     <form onSubmit={handleSubmit}>

<div class="mb-3">
 <label htmlFor="email" class="form-label">Email</label>
 <input type="email" name="email" class="form-control"value={credential.email} onChange={handelChange} id="email" aria-describedby="emailHelp" />
</div>
<div class="mb-3">
 <label htmlFor="Password" class="form-label">Password</label>
 <input type="password" name="password" class="form-control" value={credential.password} onChange={handelChange} id="Password" />
</div>
<button type="submit" class="btn btn-primary m-2">Submit</button>
<Link className="nav-link d-inline btn-danger text-white fw-700" to="/createUser">I'm a new member</Link>
</form>
</div>
 </>

)
}

export default Login