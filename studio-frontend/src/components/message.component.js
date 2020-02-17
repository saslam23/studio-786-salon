import React, { Component } from "react";

export default class Message extends Component {
    render() {
        return (
            <div >
                <div style={{ backgroundColor: "black" }} className="jumbotron">
                    <h1 className="display-4">Your Message has been sent!</h1>
                    <p style={{ color: "white" }} className="lead">Please give up to 24 hours for a response back.  Thank you!</p>
                    <hr className="my-4" />
                    <a className="btn btn-primary btn-lg" href="/" role="button">Back to Home</a>
                </div>
            </div>
        )
    }
}