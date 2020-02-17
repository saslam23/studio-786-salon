import React, { Component } from "react";

export default class Success extends Component {
    render() {
        return (
            <div >
                <div style={{ backgroundColor: "#463434" }} className="jumbotron animated fadeIn">
                    <h1 style={{ color: "" }} className="display-4 fadeInUp">Thank you!</h1>
                    <p style={{ color: "white", textAlign: "center" }} className="lead">You will now stay up to date on our latest deals and special events!</p>
                    <hr className="my-4" />
                    <div style={{ textAlign: "center" }}>
                        <a className="btn btn-secondary btn-lg " href="/" role="button">Back to Home</a>
                    </div>
                </div>
            </div>
        )
    }
}