import React, {useState} from "react";
import {Link} from "react-router-dom";
// import Lottie from "lottie-react";
// import animationData from './loginlottie.json';
import "../assets/css/login.css";
import Popup from "./utils/popup";
import { useDispatch } from "react-redux";
import { login } from "./redux/userslice";
const Login = () => {

    
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
    const dispatch = useDispatch();
    const[formData, setFormData]=React.useState({
      username:'',
      password:''
    });

    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const [message, setMessage] = React.useState({
      type: '',
      content: ''
    });

    const eventHandler = (e) =>{
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      })
    }
    const handlePaste = (e) =>{
      e.preventDefault();
      setMessage({
        ...message,
        type: 'error',
        content: 'Restricted Action'
      })
      setPopupVisible(true);
    }

    const submitLoginForm = (e) =>{
      e.preventDefault();
      const formValues = Object.values(formData);
      if(!formValues.some(value => !value)){
        setMessage({
          type: 'success',
          content: 'Login Successful !'
        });
      } else {
        setMessage({
          type: 'error',
          content: 'Please fill in all the fields'
        });
      }
      setPopupVisible(true);
      dispatch(login({
        email: formData.email
      }))
    }
    return(
        <div className="login-bg"><br></br><br></br>
        <div>
        {/* <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      /> */}
      
           
      <div className="flex">
      <div className="login-box">
        <h1>Login</h1>
      <form onSubmit={submitLoginForm}>
            <label className="login-text">Username:</label><br></br><br></br>
            <input className="login-input" placeholder="Username" type="text" name="username" id="username" onChange={eventHandler} /><br></br><br></br>
            <label className="login-text">Password:</label><br></br><br></br>
            <input className="login-input" placeholder="Password" type="password" name="password" id="password" onChange={eventHandler} onPaste={handlePaste}></input><br></br><br></br>
            {/* <Link to="/signup"> */}
              <button  className="login-button" type="submit">Login</button>
            {/* </Link> */}
        </form>
      </div>&emsp;&emsp;&emsp;
      
      </div>
      
      </div>
          {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)}/>}
        </div>
          )
}
export default Login;