import React from "react";
import "./CSS/Advertisement2.css"
import business from "./Assets/business.webp"
function Advertisement2(){
    return(
        <div className="Advertisement2-main">
                <h1>Get bestsellers at best prices</h1>
            <div className="zone1">
                <div className="zone1-1">
                <h1>Devices</h1>
                <p>This is your go-to place for buying everything you need in one go. Explore the newest smartphones, smartwatches, Wi-Fi connections, Jio accessories, and much more, all at exclusive prices.</p> 
                <button>View all devices<span>
                <i className="fa fa-arrow-right"></i>
                    </span></button>
                </div>
                <div className="zone1-2">
                    <div className="head">
                 <h3>TRENDING</h3>
                 </div>
                 <img src="https://jep-asset.akamaized.net/cms/assets/devices/jiomotive-11-12-2023.png" alt=""/>
                 <h1>JioMotive</h1>
                 <div className="price">
                 <p1>₹4999</p1>
                 <p2>₹11999</p2>
                 <p3>Save 58%</p3>
                 </div>
                 <button>Buy from JioMart</button>
                </div>
                <div className="zone1-3">
                <div className="head">
                 <h3>HOT DEAL</h3>
                 </div>
                 <img src="https://jep-asset.akamaized.net/cms/assets/accesories/jiodive.jpeg" alt=""/>
                 <h1>JioDive</h1>
                 <div className="price">
                 <p1>₹1295</p1>
                 <p2>₹2499</p2>
                 <p3>Save 48%</p3>
                 </div>
                 <button>Buy from JioMart</button>
                </div>
                <div className="zone1-4">
                 <img src="https://jep-asset.akamaized.net/cms/assets/devices/JioBook.webp" alt=""/>
                 <h1>JioBook</h1>
                 <div className="price">
                 <p1>₹14499</p1>
                 <p2>₹25000</p2>
                 <p3>Save 41%</p3>
                 </div>
                 <button>Buy from JioMart</button>
                </div>
            </div>
            <div className="zone2">
                <div className="zone2-1">
                  <img src={business} alt=""/>
                  <h1>Grow your business faster than ever</h1>
                  <p>Explore future-ready digital solutions for business across industries.</p>
                  <button>Explore JioBusiness</button>
                </div>
                <div className="zone2-2">
                 <h1>Need guidance?</h1>
                 <p>We would love to help you.</p>
                <div className="zone2-2-buttons">
                 <ul>
                        <li><button className="zone2-2-button">Support</button></li>
                        <li><button className="zone2-2-button">Chat with us</button></li>
                        <li><button className="zone2-2-button">Call us</button></li>
                        <li><button className="zone2-2-button">Find a store</button></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Advertisement2