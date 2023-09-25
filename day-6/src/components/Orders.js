import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/dashboard.css'; 
import Footer from "./utils/footer";
import SideBar from "./SideBar";

const Orders =()=>{
    return(
        <>

        <div style={{display: "flex"}}>
        <SideBar />
        
        <div style={{marginLeft: "250px"}}>
        <table>
  <tr>
    <th>Order ID</th>
    <th>USER ID</th>
    <th>User Name</th>
    <th>Time</th>
    <th>Date</th>
    <th>Art Work ID</th>
  </tr>
  <br></br><br></br>
  <tr>
    <td>Peter</td>
    <td>peter_12</td>
    <td>peter12@gmail.com</td>
    <td>8987466373</td>
    <td>8987466373</td>
    <td>8987466373</td>
  </tr>
  <br></br><br></br>
  <tr>
    <td>griffin_33</td>
    <td>Griffin</td>
    <td>griffin33@gmail.com</td>
    <td>9873679474</td>
    <td>9873679474</td>
    <td>9873679474</td>
  </tr>
  <br></br><br></br>
  <tr>
    <td>Joe</td>
    <td>Jo_oe</td>
    <td>jooee24@gmail.vcom</td>
    <td>6463536373</td>
    <td>6463536373</td>
    <td>6463536373</td>
  </tr>
  <br></br>
  <br></br>
  <tr>
    <td>John</td>
    <td>John_john</td>
    <td>john123@gmail.com</td>
    <td>7894677334</td>
    <td>7894677334</td>
    <td>7894677334</td>
  </tr>
  <br></br><br></br>
  </table>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default Orders;