// import React from "react";
// import {Link } from "react-router-dom";

// const Home=()=>
// {
//     return(
//         <div>home
//         <Link to="/login"><button>Login</button></Link>
//         <Link to="/dashboard"><button>DashBoard</button></Link></div>
//     )
// }
// export default Home;

import React from "react";
import NavBar from "./utils/NavBar";
import "../assets/css/NavBar.css";

const Home = () =>{
    return(
        <>
        <div style={{ backgroundImage:`url("https://img.freepik.com/free-vector/landscape-abstract-watercolor-background_52683-25325.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais")`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <NavBar /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>    
        <div className="home-text">Art Lover ?<br></br>You came to the right place.</div>
        </div>

        </>
    )
}
export default Home;