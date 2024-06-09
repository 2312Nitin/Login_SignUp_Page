import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
  const[registrationdata,setregistrationdata]= useState({
    username:'',
    password:'',
  })
  const handleRegistrationChange = (e)=>{
    const {name,value}= e.target;
    setregistrationdata((prevdata)=>
    ({
      ...prevdata,
      [name]:value,

    }))

  }
  const handleRegistrationSubmit =async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/register')
      console.log(response.data );
    }
    catch(error){
      console.log(error);

    }
    setregistrationdata({
      username:'',
      password:'',
    })

  }
  return (
    <div>
        <h1>Registration Page</h1>
        <form onSubmit={handleRegistrationSubmit}>
            <input
            type='text'
            name='username'
            placeholder='Username'
            value={registrationdata.username}
            onChange={handleRegistrationChange}
            required/>
            <input
            type='password'
            name='password'
            placeholder='Password'
            value={registrationdata.password}
            onChange={handleRegistrationChange}
            required/>
            <button type='submit'>Register</button>
            <p>Not Registered yet? 
                <Link to ='/login'>Login Here</Link>
            </p>
        </form>

    </div>
  )
}

export default RegistrationPage