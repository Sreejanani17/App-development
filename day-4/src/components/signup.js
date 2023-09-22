import React, {useState} from "react";
import "../assets/css/signup.css";
import {Link, useNavigate} from "react-router-dom";
import Popup from "./utils/popup";
const SignUp = () => {

    // const[user, setUser]=useState({
    //     username:'',
    //     password:''
        
    // })
    // const handleChange = (e) =>{
    //     setUser({
    //         ...user,[e.target.name]:e.target.value
    //     });
    // }
    // const submitForm = (e) => {
    //     e.preventDefault();
    // }
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
      name: '',
      username: '',
      phonenumber: '',
      email: '',
      password: '',
      confirm: ''
     });
  
    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const [message, setMessage] = React.useState({
          type: '',
          content: '',
          url: '',
          btn: ''
      });
      const eventHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const showMessage = (type, content, url = '', btn = 'Got it') => {
      setMessage({ type, content, url, btn });
      setPopupVisible(true);
  };
    const handlePaste = (e) => {
      e.preventDefault();
      showMessage('error', 'Restricted action');
  };
  const handleGotItClick = () => {
    if (message.url) {
        navigate(message.url);
    }
    setPopupVisible(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = Object.values(formData);
    if (!formValues.some(value => !value)) {
      showMessage('success', 'Registration successful!', '/', 'Login');
  } else {
      showMessage('error', 'Please fill in all fields');
  }
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
      <form onSubmit={handleSubmit}>
            <label className="signup-text">Name:</label><br></br>
            <input placeholder="Name"className="signup-input" type="text" name="name" id="name" onChange={eventHandler} /><br></br>
            <label className="signup-text">Username:</label><br></br>
            <input placeholder="User Name" className="signup-input" type="text" name="username" id="username" onChange={eventHandler} /><br></br>
            <label className="signup-text">Phone Number:</label><br></br>
            <input placeholder="Mobile Number" className="signup-input" type="text" name="phonenumber" id="phonenumber" onChange={eventHandler}></input><br></br>
            <label className="signup-text">Email:</label><br></br>
            <input placeholder="Email" className="signup-input" type="text" name="email" id="email" onChange={eventHandler} /><br></br>
            <label className="signup-text">Password:</label><br></br>
            <input placeholder="Password" className="signup-input" type="password" name="password" id="password" onChange={eventHandler} onPaste={handlePaste}></input><br></br>
            <label className="signup-text">Confirm Password:</label><br></br>
            <input placeholder="Confirm Password" className="signup-input" type="password" name="confirm" id="confirm" onChange={eventHandler} onPaste={handlePaste}></input><br></br><br></br>
            <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>&emsp;&emsp;
      &emsp;      
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
       </div>
    )
}
export default SignUp;

