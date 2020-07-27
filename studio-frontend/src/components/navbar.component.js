import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link to="home"> <a href="/#" style={{ paddingLeft: "50px" }} className="navbar-brand" >
          <img
            src={process.env.PUBLIC_URL + "/assets/s786-white.png"}
            alt="s786logo"
            className="studiologo"
          />
        </a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" navbar-collapse collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <Link activeClass="active"
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            > Home </Link>
            <Link activeClass="active"
              className="nav-link"
              to="services"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
            > Services </Link>
            <Link activeClass="active"
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-75}
              duration={500}
            > About </Link>
            <Link activeClass="active"
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-75}
              duration={500}
            > Contact Us </Link>
          </div>
        </div>
      </nav >
    );
  }
}
