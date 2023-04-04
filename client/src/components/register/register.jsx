import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import './register.css'

const Register=()=>{
    const [Email,setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        if(Email.length && Password.length){
            try{
                e.preventDefault();

                const response = await axios.post("http://localhost:8085/register",{
                    Email,
                    Password
                })
                console.log(response.data);
                navigate('/')
            }catch(error){
                if(error.response.data ==="Email already exist"){
                    alert("Email already exist")
                }
            }
            }
        
        else{
            alert('please fill all the fields')
        }
    }
    return(
        <>
        <div className="register_container">
            <header>
                <h1>Register</h1>
            </header>
            <main className="register_body">
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} /><br/>
                    <input type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)} /><br/>
                    <button type="submit">Register</button>
                </form>
            </main>
        </div>
        </>
    )
}
export default Register;