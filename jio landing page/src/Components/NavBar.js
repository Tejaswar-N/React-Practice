import React from "react";
import "./CSS/NavBar.css"
import jio from "./Assets/jio.png"
import jiologin from  "./Assets/logo.jpeg"
import search from "./Assets/search.png"
function Header(){
 return (
    <div className="Nav-Bar" >
      <nav className="NavBar">                                    
      <div class="jio-logo">
              <a href="/" class="j-link" aria-label="Jio header logo" tabindex="0">
                <section data-mode="light" class="header_logo-group-logo j-container">
                 <span class="j-icon">
                    <svg height={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="currentColor"></rect>
                      <path d="M17.587 14.559c-.883 0-1.49-.648-1.49-1.574 0-.912.62-1.56 1.49-1.56s1.491.648 1.491 1.573c0 .897-.634 1.56-1.49 1.56zm.03-5.152c-2.265 0-3.772 1.437-3.772 3.576 0 2.195 1.451 3.604 3.729 3.604 2.264 0 3.755-1.409 3.755-3.59 0-2.153-1.475-3.59-3.713-3.59zM11.78 6.272c-.856 0-1.395.483-1.395 1.243 0 .774.552 1.257 1.435 1.257.857 0 1.395-.483 1.395-1.257 0-.773-.552-1.243-1.435-1.243zm.152 3.204h-.277c-.675 0-1.187.317-1.187 1.285v4.42c0 .98.496 1.284 1.216 1.284h.275c.677 0 1.16-.33 1.16-1.285v-4.419c0-.995-.47-1.285-1.187-1.285zM8.316 7.392h-.4c-.76 0-1.174.43-1.174 1.285v4.13c0 1.063-.36 1.436-1.2 1.436-.662 0-1.201-.29-1.63-.816C3.87 13.373 3 13.786 3 14.81c0 1.104 1.035 1.781 2.955 1.781 2.334 0 3.563-1.173 3.563-3.742V8.675c0-.856-.413-1.283-1.202-1.283z" fill="#fff"></path>
                    </svg>
                  </span>
                </section>
              </a>
            </div>
        {/* <img src={jio} alt=""  width={20}/> */}
      <ul >
        <li>Mobile</li>
        <li>True5g</li>
        <li>JioFiber</li>
        <li>AirFiber</li>
        <li>Business</li>
        <li>Devices</li>
        <li>Apps</li>
        <li>Support</li>         
      </ul>
      <div className="searchh" >
          {/* <input className="search" type="search" /> */}
        {/* <button type="submit"></button> */}
        <img src={search} alt=""  width={20} />
       
        </div>
           <img src={jiologin} alt=""  width={20} />
           
      </nav>
    </div>
   

 )
}

export default Header