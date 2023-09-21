import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../assets/css/signup.css";
const SignUp = () => {

    const[user, setUser]=useState({
        username:'',
        password:''
        
    })
    const handleChange = (e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
    const submitForm = (e) => {
        e.preventDefault();
    }
    return(
        <div className="signup-bg">
        {/* <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      /> */}
      
      <div className="flex">
      <div className="signup-box"><h1>Sign Up</h1>
      <form onSubmit={submitForm}>
            <label className="signup-text">Name:</label><br></br>
            <input placeholder="Name"className="signup-input" type="text" name="name" id="name" onChange={handleChange} /><br></br>
            <label className="signup-text">Username:</label><br></br>
            <input placeholder="User Name" className="signup-input" type="text" name="username" id="username" onChange={handleChange} /><br></br>
            <label className="signup-text">Phone Number:</label><br></br>
            <input placeholder="Mobile Number" className="signup-input" type="text" name="phonenumber" id="phonenumber" onChange={handleChange}></input><br></br>
            <label className="signup-text">Email:</label><br></br>
            <input placeholder="Email" className="signup-input" type="text" name="email" id="email" onChange={handleChange} /><br></br>
            <label className="signup-text">Password:</label><br></br>
            <input placeholder="Password" className="signup-input" type="password" name="password" id="password" onChange={handleChange}></input><br></br>
            <label className="signup-text">Confirm Password:</label><br></br>
            <input placeholder="Confirm Password" className="signup-input" type="password" name="confirm" id="confirm" onChange={handleChange}></input><br></br><br></br>
            <Link to="/"><button className="signup-button" type="submit">Sign Up</button></Link>
        </form>
      </div>&emsp;&emsp;
      &emsp;      
      </div>
                    </div>
    )
}
export default SignUp;

