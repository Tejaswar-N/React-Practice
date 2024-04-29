import React from "react";
import "./CSS/PartOne.css"
import image from "./Assets/partone.webp"
function PartOne() {
    return (
        <div>
            <div className="img-text">
                <div className="PartOne">
                    <img src={image} alt="" />
                </div>
                <div className="text">
                    <h1>There's more to mobile recharges</h1>
                    <p>Now access up to 14 OTT apps with just one plan.</p>

                    <button className="b1"><p1>Check plans</p1></button>

                    <button className="b2"><p2>Explore</p2><i class="fa">&#xf01d;</i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PartOne;