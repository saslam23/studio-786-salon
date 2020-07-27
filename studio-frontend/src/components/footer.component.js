import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <br></br>
                <div className="text-white row align-items-center" data-aos="fade-up" data-aos-duration="2000">

                    <div className="col-sm-6 col-md-4 my-auto footerFont">
                        <p>Studio 786 Salon</p>
                        <p>1728 East Roosevelt Road</p>
                        <p>Wheaton IL, 60187</p>
                        <p>(630) 580-9027</p>
                    </div>
                    <div style={{ textAlign: "center" }} className="col-sm-6 col-md-4 my-auto">
                        <div>
                            <a href="https://www.facebook.com/Studio786beautysalon/"><img className="image" alt="facebook" src={process.env.PUBLIC_URL + "/assets/pink-fb-logo.png"} /></a>
                            <a href="https://www.instagram.com/studio786_salon/"><img className="image" style={{ marginTop: "23px" }} alt="instagram" src={process.env.PUBLIC_URL + "/assets/pink-insta-logo.png"} /></a>
                        </div>

                    </div>

                    <div className="col-sm-6 col-md-3">
                        <h3>Hours</h3>
                        <table style={{ color: "white" }} className="table table-bordered table-responsive{-sm}">
                            <thead>
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td>11-4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td>10-7</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td>10-7</td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td>10-7</td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td>10-7</td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday</th>
                                    <td>10-6</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ textAlign: "center", color: "white" }} className="copywright">
                    <p> Copyright &copy; {(new Date().getFullYear())} Venture Inc. </p>
                </div>
            </div>
        )
    }
}