import React, { Component } from "react";

export default class Fail extends Component {
    render() {
        return (
            <div >
                <div style={{ backgroundColor: "#463434" }} className="jumbotron animated fadeIn">
                    <h1 className="display-4">Uh Oh!</h1>
                    <p style={{ color: "white", textAlign: "center" }} className="lead">Looks like something went wrong...</p>
                    <hr className="my-4" />
                    <p style={{ color: "white" }}>Go to the home page and try again</p>
                    <div style={{ textAlign: "center" }} >
                        <a className="btn btn-secondary btn-lg" href="/" role="button">Back to Home</a>
                    </div>
                </div>
            </div>
        )
    }
}