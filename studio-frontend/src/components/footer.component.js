import React, { useState } from 'react';
import axios from 'axios';

export default function Footer() {
    const [email, setEmail] = useState('');


    const submitHandler= async (e) =>{
        e.preventDefault();

        const {data} = await axios.post('http://localhost:8080/signup', {email});
        if(data === "successfully subscribed!"){
            window.location ="/success";
        }else{
            window.location="/fail";
        }
    }   


    return (
        <div className="footer">
        <div className="footer-info">
        <h2>Studio 786 salon</h2>
        <h3>Subscribe!</h3>
        <form onSubmit={submitHandler}>
            <input className="subscribe" type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address"/>
            <br/>
            <button className="submit-button" type="submit">Submit</button>
        </form>
        </div>
        
    </div>
    )
}
