import React from "react"
import "./CSS/Footer.css"
import jio from "./Assets/jio.png"
function Footer() {
    return (
        <div className="foot">
            <div className="top">
                <div className="menu">
                    <div className="menu1">
                        <h1>Our offerings</h1>
                        <ul>
                            <li>Prepaid</li>
                            <li>Postpaid</li>
                            <li>Port to Jio</li>
                            <li>International roaming</li>
                            <li>Apps</li>
                            <li>eSIM</li>
                            <li>WiFi calling</li>
                            <li>Jio Tunes</li>
                            <li>Devices</li>
                            <li>JioBook</li>
                            <li>5G Networl</li>
                        </ul>
                    </div>
                    <div className="menu2">
                        <h1>Support</h1>
                        <ul>
                            <li>Track order</li>
                            <li>My Account</li>
                            <li>FAQ</li>
                            <li>Locate us</li>
                            <li>Lost SIM</li>
                            <li>Claim refund</li>
                            <li>Reclaim number</li>
                            <li>Feedback</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="menu3">
                        <h1>Our company</h1>
                        <ul>
                            <li>Reliance Industries</li>
                            <li>Reliance Foundation</li>
                            <li>JioLife</li>
                            <li>Careers</li>
                            <li>Investor relations</li>
                        </ul>
                    </div>
                    <div className="menu4">
                        <h1>Usefull links</h1>
                        <ul>
                            <li> Get Jio SIM</li>
                            <li>Choice number</li>
                            <li>JioAutoPay</li>
                            <li>Brand offers</li>
                            <li>Partner with Jio</li>
                            <li>Get JioAirFiber</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
                <div className="social">
                    <div className="social1">
                        <h1>Connect with us</h1>
                    </div>
                    <div className="social2">
                        <h1>Download MyJio</h1>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <img src={jio} alt="" />
                </div>
                <p>Copyright © 2024 Reliance Jio Infocomm Ltd. All rights reserved.</p>
                <div className="bottom1">
                    <ul>
                        <li>Press release</li>
                        <li>Regulatory</li>
                        <li>Policies</li>
                        <li>Terms & conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer