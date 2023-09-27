import React from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const Seller = () => {
    return(
        <>
        <div style={{display: "flex"}}>
        <SideBar/>
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
        <div style={{marginLeft: "250px"}}>
        <div style={{marginLeft: "250px"}} className="head-text">Seller</div>
        <div>
        <div>
          <table>
          <tr>
          <th>ARTIST ID</th>
          <th>ARTIST NAME</th>
          <th>USERNAME</th>
          <th>EMAIL ID</th>
          <th>MOBILE NUMBER</th>
          <th>ART WORK NAME</th>
          <th>ART WORK ID</th>
          <th>STARTING PRICE</th>
          </tr><br></br>
          <tr>
            <td>C454</td>
            <td>Aneta Kajzer</td>
            <td>aneta_kajzer</td>
            <td>anetakajzer@gamil.com</td>
            <td>7458120350</td>
            <td>Sunset Boulevard</td>
            <td>A123</td>
            <td>1,00,000</td>
          </tr><br></br>
          <tr>
            <td>C899</td>
            <td>Everett Shinn</td>
            <td>Everett_Shinn</td>
            <td>everrtshinn@gmail.com</td>
            <td>8451274522</td>
            <td>Julia Marlowe as Barbara Frietchie in the Play</td>
            <td>A845</td>
            <td>2,00,00,000</td>
          </tr><br></br>
          <tr>
            <td>C467</td>
            <td>Ralph Albert Blakelock</td>
            <td>Ralph_Albert</td>
            <td>raphl2@gamil.com</td>
            <td>7845128521</td>
            <td>Woodland Cabin</td>
            <td>A231</td>
            <td>2,00,000</td>
          </tr><br></br>
          </table>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Seller;