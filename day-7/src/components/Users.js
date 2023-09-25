import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/dashboard.css'; 
import Footer from "./utils/footer";
import SideBar from "./SideBar";

const Users= () =>{
    return(
        <>
        <div style={{display: "flex"}}>
       {/* <SideBar /> */}
       <div style={{backgroundImage: `url("https://img.freepik.com/free-vector/abstract-nature-background-mobile-phone-wallpaper_53876-115909.jpg?w=360&t=st=1695282014~exp=1695282614~hmac=7f04754148ca9d4daac5afde057d0bba4e890119dc0bc18eb99df1218b9d7b8d")`}} className="admin-nav">
            <div className="admin-text1"><br></br>ADMIN</div>
            <br></br><hr color="black"></hr><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><div className="admin-text">DASHBOARD</div></Link>&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><div className="admin-text">USERS</div></Link>&emsp;&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><div className="admin-text">ORDERS</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/admin" ><div className="admin-text">ADMIN</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/seller" ><div className="admin-text">SELLER</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/artwork" ><div className="admin-text">ART WORK</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link>&emsp;<img style={{marginTop: "250px"}} alt="" src="logout.png" height="30px" width="30px"></img></div>
        </div>
        <div >
          <button style={{marginLeft:"1000px"}}>Add Users</button>
        <table>
  <tr>
    <th>Firstname</th>
    <th>User Name</th>
    <th>Email</th>
    <th>Mobile Number</th>
    <th>Actions</th>
  </tr>
  <br></br><br></br>
  <tr>
    <td>Peter</td>
    <td>peter_12</td>
    <td>peter12@gmail.com</td>
    <td>8987466373</td>
    <td>
      <button>Update</button>&nbsp;&emsp;&emsp;
      <button>Delete</button>
    </td>
  </tr>
  <br></br><br></br>
  <tr>
    <td>griffin_33</td>
    <td>Griffin</td>
    <td>griffin33@gmail.com</td>
    <td>9873679474</td>
    <button>Update</button>&nbsp;&emsp;&emsp;
      <button>Delete</button>
  </tr>
  <br></br><br></br>
  <tr>
    <td>Joe</td>
    <td>Jo_oe</td>
    <td>jooee24@gmail.vcom</td>
    <td>6463536373</td>
    <button>Update</button>&nbsp;&emsp;&emsp;
      <button>Delete</button>
  </tr>
  <br></br><br></br>
  <tr>
    <td>John</td>
    <td>John_john</td>
    <td>john123@gmail.com</td>
    <td>7894677334</td>
    <button>Update</button>&nbsp;&emsp;&emsp;
      <button>Delete</button>
  </tr>
  </table>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default Users;