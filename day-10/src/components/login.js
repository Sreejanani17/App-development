import React, {useState} from "react";
 import {Link} from "react-router-dom";
 import "../assets/css/login.css";
 import { useUser } from "./context/UserContext";
 import Popup from "./utils/popup";
 import { useDispatch } from "react-redux";
 import { login } from "./redux/userslice";
 import { useNavigate } from "react-router-dom";
 import AdminLogin from "./admin";


const Login = () => {
    
    const dispatch = useDispatch();
    const { login: userLogin } = useUser();

    const[formData, setFormData]= useState({
      username:'',
      password:''
    });

    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const [message, setMessage] = React.useState({
      type: '',
      content: '',
      url: '',
      btn: ''
    });

    const eventHandler = (e) =>{
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    const showMessage = (type, content, url = '', btn = 'Got it') => {
      setMessage({type, content, url, btn});
      setPopupVisible(true);
    }
    const handlePaste = (e) =>{
      e.preventDefault();
      showMessage('error', 'Restricted action');
    };
    const handleGotItClick = () =>{
      if(message.url){
        navigate(message.url);
      }
      setPopupVisible(false);
    };
  const navigate = useNavigate();

    const submitLoginForm = (e) =>{
      e.preventDefault();
      const formValues = Object.values(formData);
      if(!formValues.some(value => !value)){
        showMessage('sucess', 'Login successful !', '/');
        userLogin();
        dispatch(login({username: formData.username, password: formData.password}));
      //   setTimeout(() => {
      //     navigate('/');
      // }, 1500);
      } else {
        showMessage('error', 'Please fill in all the fields');
      }
    };
    return(
        <div style={{ backgroundImage:`url("moon.jpg")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div>
      <div className="flex">
      <div className="login-box"><br></br><br></br><br></br>
        <h1 style={{marginLeft:"230px"}}>Login</h1><br></br>
      <form style={{marginLeft:"95px"}} onSubmit={submitLoginForm}>
            <input className="login-input" placeholder="Username" type="text" name="username" id="username" minLength={8} maxLength={12} onChange={eventHandler} /><br></br><br></br>
            <input className="login-input" placeholder="Password" type="password" name="password" id="password" minLength={8} maxLength={15} onChange={eventHandler} onPaste={handlePaste}></input><br></br><br></br>
            <br></br>
              <button  className="login-button" type="submit">Login</button><br></br><br></br>
        </form>
      
        <div style={{textAlign: "center", marginLeft:"-20px"}}>Doesn't have an account ? <Link style={{textDecoration: "none", color:"black"}}to="/signup">Sign Up</Link>
        <br></br><br></br><br></br></div>
        <div style={{textAlign: "center", marginLeft:"-20px"}}><Link style={{textDecoration: "none", color:"black"}}to="/admin-login">Admin Login</Link></div>
        </div>
      &emsp;&emsp;&emsp;
      </div>
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
          )
        }
export default Login;