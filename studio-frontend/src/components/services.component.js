import React, { Component } from "react";
import axios from "axios";
export default class Services extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const subscriber = {
      email: this.state.email
    };
    console.log(subscriber);

    axios.post("/signup", subscriber)
      .then((res) => {
        if (res.data === "successfully subscribed!") {
          window.location = "/success";
        } else if (res.data === "something went wrong") {
          window.location = "/fail";
        }
      })



  }
  render() {
    return (
      <div className="services" id="services" >
        <form
          onSubmit={this.onSubmit}
          style={{ paddingTop: "20px", overflowY: "hidden" }}
          className="justify-content-center input-group mb-3"
        >
          <div className="input-group-prepend">
            <button
              style={{
                fontFamily: "Lemonada", fontSize: "18pt"
              }}
              type="submit"
              className="btn btn-dark"
            >
              Subscribe!
            </button>
          </div>
          <input
            style={{
              height: "47px",
              width: "375px",
              fontSize: "22pt",
              textAlign: "center",
              marginBottom: "65px"
            }}
            type="text"
            placeholder="enter your email"
            aria-label=""
            aria-describedby="basic-addon1"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </form>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 style={{ textAlign: "center" }}>Our Services</h1>
          <br></br>
          <div className="servicePictures">
            <div className="outerPicture">
              <img
                className="picture"
                src={process.env.PUBLIC_URL + "/assets/eyebrow-threading-2.jpg"}
                alt="eyebrowthreading"
              />
            </div>
            <div className="outerPicture facial">
              <img
                className="picture"
                src={process.env.PUBLIC_URL + "/assets/facial-massage-2.jpg"}
                alt="eyebrowthreading"
              />
            </div>
            <div className="outerPicture haircut hair">
              <img
                className="picture "
                src={process.env.PUBLIC_URL + "/assets/haircut.jpg"}
                alt="haircut"
              />
            </div>
            <div className="outerPicture">
              <img
                className="picture highlights"
                src={process.env.PUBLIC_URL + "/assets/highlights.jpg"}
                alt="eyebrowthreading"
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div
            style={{ textAlign: "center", fontSize: "16pt", color: "white" }}
            className="row"
          >
            <div className="col-6 col-md-4">
              <h2 style={{ fontWeight: "bold" }}>
                {this.props.threading.header}
              </h2>
              <div>
                {this.props.threading.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4">
              <h2 style={{ fontWeight: "bold" }}>{this.props.waxing.header}</h2>
              <div>
                {this.props.waxing.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4 hairService">
              <h2 style={{ fontWeight: "bold" }}>
                {this.props.hairServices.header}
              </h2>
              <div>
                {this.props.hairServices.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4">
              <h2 style={{ fontWeight: "bold", marginTop: "3rem" }}>
                {this.props.bodyWaxing.header}
              </h2>
              <div>
                {this.props.bodyWaxing.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4 colorPad">
              <h2 style={{ fontWeight: "bold", marginTop: "3rem" }}>
                {this.props.color.header}
              </h2>
              <div>
                {this.props.color.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4">
              <h2 style={{ fontWeight: "bold", marginTop: "3rem" }}>
                {this.props.facial.header}
              </h2>
              <div>
                {this.props.facial.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4">
              <h2 style={{ fontWeight: "bold", marginTop: "3rem" }}>
                {this.props.specialOccasions.header}
              </h2>
              <div>
                {this.props.specialOccasions.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="col-6 col-md-4">
              <h2 style={{ fontWeight: "bold", marginTop: "3rem" }}>
                {this.props.makeup.header}
              </h2>
              <div>
                {this.props.makeup.Types.map((item, i) => (
                  <li style={{ listStyle: "none" }} key={i}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// For the rows, we want to return all the items and they're inside an array. Then we'll use the props method
// to call the array.
