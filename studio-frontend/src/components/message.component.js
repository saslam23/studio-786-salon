import React, { Component } from "react";

export default class Message extends Component {
    render() {
        return (
            <div >
                <div style={{ backgroundColor: "#463434" }} className="jumbotron animated fadeIn">
                    <h1 className="display-4">Your Message has been sent!</h1>
                    <p style={{ color: "white", textAlign: "center" }} className="lead">Please give up to 24 hours for a response back.  Thank you!</p>
                    <hr className="my-4" />
                    <div style={{ textAlign: "center" }}>
                        <a className="btn btn-secondary btn-lg" href="/" role="button">Back to Home</a>
                    </div>
                </div>
            </div>
        )
    }
}