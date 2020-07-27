import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div className="about" id="about" >
                <div data-aos="fade-up" data-aos-duration="2000">
                    <h1>About Us</h1>
                    <div style={{ textAlign: "center", paddingRight: "23px" }}>
                        <img style={{ margin: "auto" }} className="underline" src={process.env.PUBLIC_URL + "/assets/underline-2.png"} alt="underline" />
                    </div>
                    <p style={{ color: "white", textAlign: "center" }}>{this.props.missionStatement.paragraph}</p>
                    <div style={{ textAlign: "center", paddingRight: "23px" }}>
                        <img style={{ margin: "auto" }} className="underline" src={process.env.PUBLIC_URL + "/assets/underline-2.png"} alt="underline" />
                    </div>
                </div>
            </div>
        )
    }
}