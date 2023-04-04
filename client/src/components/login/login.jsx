import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import { tokenStorage } from "../../App";

const Login=()=>{
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("");
    const [token, setToken] = useContext(tokenStorage);
    const navigate = useNavigate();

    const handleLogin=async(e)=>{
        if(Email.length && Password.length){
            e.preventDefault();
            await axios.post('http://localhost:8085/login',{
                Email,
                Password,
            }).then((res)=>{
                // console.log(res.data)
                if(res.data.message === "login sucessfully"){
                    setToken(res.data.token);
                    console.log(res.data)
                    console.log(token)
                    navigate('/timeline')
                }
            }).catch((err)=>{
                console.log(err)
                if(err.response.data.message === "user is not found please register first!"){
                    alert("user is not found please register first!");
                    navigate('/register')
                }
                else if(err.response.data.message === "invalid password"){
                    alert("wrong password")
                }
            })
        }
        else{
            e.preventDefault()
            alert("Please fill all the details")
        }
    }
    return(
        <>
        <div className="login_container">
            <h1 className="login_header">Sign In</h1>

            <div className="login_body">
                <form className="login_form" onSubmit={handleLogin}>
                    <input type="email" value={Email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/>
                    <input type="password" value={Password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
                    <button type="submut" className="login_btn">Login</button>
                </form>
            </div>
        </div>
        </>
    )
    
    
}
export default Login;