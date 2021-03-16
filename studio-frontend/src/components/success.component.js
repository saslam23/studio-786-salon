import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Message() {
    return (
        <div >
      <Jumbotron style={{backgroundColor:'rgb(78, 78, 78)', height:'50vh'} }>
  <h1>Thank You!</h1>
  <p style={{color:'white', textAlign:'center'}}>
    You will now stay up to date on our latest deals and special events.
  </p>
  <p>
  <a href="/"><button className="">Back to Home</button></a>
  </p>
</Jumbotron>
    </div>
    )
}