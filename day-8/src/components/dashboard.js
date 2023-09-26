import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/dashboard.css'; 
import Footer from "./utils/footer";

import WeekSale from "./WeeklySale";
import YearSale from "./YearlySale";
import NetProfit from "./NetProfit";
import SideBar from "./SideBar";




const DashBoard = () =>{
    
    return(
        <>
        <div style={{display: "flex"}}>
        <SideBar />
        {/* <div style={{backgroundImage: `url("https://img.freepik.com/free-vector/abstract-nature-background-mobile-phone-wallpaper_53876-115909.jpg?w=360&t=st=1695282014~exp=1695282614~hmac=7f04754148ca9d4daac5afde057d0bba4e890119dc0bc18eb99df1218b9d7b8d")`}} className="admin-nav">
            <div className="admin-text1"><br></br>ADMIN</div>
            <br></br><hr color="black"></hr><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><div className="admin-text">DASHBOARD</div></Link>&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><div className="admin-text">USERS</div></Link>&emsp;&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><div className="admin-text">ORDERS</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/admin" ><div className="admin-text">ADMIN</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/seller" ><div className="admin-text">SELLER</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/artwork" ><div className="admin-text">ART WORK</div></Link>&emsp;&emsp;&emsp;&emsp;</div><br></br><br></br><br></br>
            <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link>&emsp;<img style={{marginTop: "250px"}} alt="" src="logout.png" height="30px" width="30px"></img></div>
        </div> */}
        <div style={{marginLeft: "400px"}}>
            <h1>&emsp;DASHBOARD</h1>

            <div style={{display: "inline-flex"}}>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Products Sold<br></br>1421<br></br></div></div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Net Profit<br></br>₹ 20,00,505<br></br></div></div>&emsp;&emsp;
            </div>
            
        <div><WeekSale /></div><br></br>
        <YearSale /><br></br><br></br>
        <NetProfit />
        <br></br> <br></br> <br></br> <br></br> <br></br>
        </div>

        </div>
        
        <Footer /><br></br>
        
        </>
    )
}
export default DashBoard;