import React, { Component } from "react";
import axios from "axios";

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      phone: '',
      message: '',
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const messageForm = {
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    }

    axios.post("/email", messageForm)
      .then(res => console.log(res.data))

    window.location = "/message"




  }
  render() {
    return (
      <div className="m-auto contacts" id="contact">
        <div data-aos="fade-up" data-aos-duration="2000"
          style={{ textAlign: "center", fontSize: "14pt", color: "white" }}
          className="row"
        >
          <div className=" col-md-4 col-sm-6">
            <h1>Call Us</h1>
            <h4>(630) 580-9027</h4>
            <br></br>
            <img
              style={{ width: "300px" }}
              src={process.env.PUBLIC_URL + "/assets/outside1.jpg"}
              alt="outside-salon"
            />
          </div>
          <div className="col-md-4 col-sm-6 ">
            <h1 style={{ paddingLeft: "18px" }}>Find Us</h1>
            <h4>Studio 786 salon is conveniently located on Roosevelt Road towards Naperville Road</h4>
            <br></br>
            <h4>1728 East Roosevelt Road</h4>
            <h4>Wheaton, IL 60187</h4>
          </div>
          <div className="col-md-4 col-sm-6 ">
            <h1>E-mail Us</h1>
            <form onSubmit={this.onSubmit}>
              <div >
                <label>E-mail address</label>
                <br></br>
                <input id="email" type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control-md" />
              </div>
              <div>
                <label>Phone Number</label>
                <br></br>
                <input id="phone" value={this.state.phone} onChange={this.onChangePhone} className="form-control-md" />
              </div>
              <div>
                <label>Message</label>
                <br></br>
                <textarea value={this.state.message} onChange={this.onChangeMessage} style={{ display: "flexbox" }} className="form-control-md textArea" id="message" placeholder="Type your message here" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
