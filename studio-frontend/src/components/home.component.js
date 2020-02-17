import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <div
          id="carouselExampleInterval"
          className="carousel slide homeCarousel"
          data-ride="carousel"
        >
          <div className="carousel-inner carousel-banner ">

            <div className="carousel-item active banner animated fadeIn " data-interval="3000"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/welcome.jpg"}
                className="d-block w-100 image-fluid"
                alt="welcome"
              />

            </div>
            <div className="carousel-item banner " data-interval="6000">
              <img
                style={{ webkitFilter: "blur(2px)" }}
                src={process.env.PUBLIC_URL + "/assets/salon.jpg"}
                className="d-block w-100 image-fluid"
                alt="studio-786"
              />
              <div className="carousel-caption d-md-block caption animated fadeInUp">
                <h1 className="bannerHeader"> Our Specials!</h1>
                <p className="bannerSpecials">
                  Mondays and Tuesdays Eyebrow Threading for $6
                  <br></br>
                  <br></br>
                  Root Touch up and Partial Highlights for $60
                </p>
              </div>
            </div>
            <div className="carousel-item banner" data-interval="5000">
              <img
                style={{ webkitFilter: "blur(2px)" }}
                src={process.env.PUBLIC_URL + "/assets/contact-banner-3.jpg"}
                className="d-block w-100 image-fluid"
                alt="welcome"
              />
              <div className="carousel-caption d-md-block caption animated fadeInUp">
                <h1 className="bannerHeader">Make an Appointment with us</h1>
                <p className="bannerSpecials">
                  Call (630) 580-9027
                  <br></br>
                  <br></br>
                  We look forward to seeing you!
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
