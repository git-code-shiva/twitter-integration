import React, { useContext } from "react";
import { tokenStorage } from "../../App";
import { useNavigate } from "react-router-dom";
import './header.css'

const Header=()=>{
    const [token, setToken] = useContext(tokenStorage);
    const navigate = useNavigate();
    const logout=()=>{
        setToken(null);
    }
    if(token){
        return(
            <>
            <div className="header_container">
                <span className="home_icon">Home</span>
                <span className="logout" onClick={logout}>logout</span>
            </div>
            </>
        )
    }
    else{
        return(
            <>{navigate("/")}</>
        )
    }
   
}
export default Header;