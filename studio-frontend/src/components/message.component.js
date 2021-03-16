import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Message() {
    return (
        <div >
      <Jumbotron style={{backgroundColor:'rgb(78, 78, 78)', height:'50vh'} }>
  <h1>Your Message has been sent!</h1>
  <p style={{color:'white', textAlign:'center'}}>
    Please give up to 24 hours for a response back. Thank you!
  </p>
  <p>
  <a href="/"><button className="">Back to Home</button></a>
  </p>
</Jumbotron>
    </div>
    )
}
