import {BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "../navbar/navbar.css"




const Navbar = () => {
    const navbarStyle = {
        display: "flex",
        flexDirection : "row",
        justifyContent : "space-around",
        borderBottom  :"1px solid silver",
        fontSize: "20px",
        width: "100%"
    }
    const ulStyle = {
        display: "flex",
        flexDirection : "row",
        justifyContent : "space-between",
    }

    return(
        <div style={navbarStyle}>
            <ul style={ulStyle}>
                <li style={{listStyleType : "none"}}>
                    <NavLink style={{textDecoration :"none"}} to="/">Products</NavLink>
                </li>
            </ul>
            <ul style={ulStyle}>
                <li style={{listStyleType : "none"}}>
                    
                    <NavLink  style={{textDecoration :"none"}}  to="/signin">Sign In</NavLink>
                </li>
                <li style={{listStyleType : "none", marginLeft :"20px"}}>
                    <NavLink  style={{textDecoration :"none"}} to="/basket">Basket</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;