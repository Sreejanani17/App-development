import React from "react";
import NavBar from "./utils/NavBar";

const Sell = () =>{

    return(
        <div>
            <NavBar />
            <br></br>
            <br></br>
            <br></br><br></br><br></br><br></br><br></br>
            <div>Get the ArtWork</div>
            &nbsp;&nbsp;Details<br></br><br></br>
            <label>Artname:</label>
            <input placeholder="artname"></input><br></br><br></br>
            <label>Artno:</label>
            <input placeholder="artno"></input><br></br><br></br>
            <label>price:</label>
            <input placeholder="price"></input><br></br><br></br>
            <label>type:</label>
            <input placeholder="type"></input><br></br><br></br>


        </div>
    )
}
export default Sell;