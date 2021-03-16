import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) =>{
    e.prevenDefault();

    const messageForm = {
      email,
      phone,
      message
    }

    const {data} = await axios.post('/email', messageForm)

    if(data == "Email has been sent!"){
      window.location="/message";
    } else{
      alert('There was a problem...');
    }
  }
  return (
    <div className="contacts" id="contact">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>1728 E Roosevelt Rd, Wheaton, IL 60187, USA</p>
          <p>studio786inquiry@gmail.com</p>
          <p>(630) 580-8027</p>
        </div>

            <form onSubmit={submitHandler}>
              <h1>E-mail Us</h1>
              <div >
                <label>E-mail address</label>
                <br></br>
                <input id="email" type="email" name="email" onChange={(e) =>setEmail(e.target.value)} />
              </div>
              <div>
                <label>Subject</label>
                <br></br>
                <input id="subject"  name="subject" onChange={(e)=>setPhone(e.target.value)}  />
              </div>
              <div>
                <label>Message</label>
                <br></br>
                <textarea onChange={(e)=>setMessage(e.target.value)} style={{ display: "flexbox" }} className="textArea" id="message" placeholder="Type your message here" rows="5"></textarea>
              </div>
              <button type="submit" >Send</button>

            </form>
          </div>
  )
}

