import React from "react";
import NavBar from "./utils/NavBar";
import Footer from "./utils/footer";
import '../assets/css/sell.css'; 


const Sell = () =>{
    
   
    return(
        <div>
            <NavBar />
            <br></br><br></br><br></br>               
            <hr></hr><br></br>
            <div className="first-head">Sell Your Art Work<br></br><br></br></div>
            <div className="box">
                <form >
                {/* <label className="label">Art Work:</label> */}
                <input className="input"placeholder="art work name"></input><br></br><br></br>
                {/* <label className="label">Artist:</label> */}
                <input className="input" placeholder="artist"></input><br></br><br></br>
                {/* <label className="label">Price:</label> */}
                <input className="input"placeholder="price"></input><br></br><br></br>
                {/* <label className="label">Type</label> */}
                <input  className="input"placeholder="type"></input><br></br><br></br>
                {/* <label className="label">size:</label> */}
                <input  className="input"placeholder="size"></input> <br></br>             
                
                <br></br><button className="sell-button" type="submit">submit</button><br></br><br></br><br></br><br></br><br></br>
                </form>
            </div>
      
  
        <div><Footer /></div>
        </div>


        
    )
    }
export default Sell;