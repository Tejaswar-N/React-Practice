import React from "react"
import "./CSS/Advertisement.css"
import image from "./Assets/primetv.webp"
import chair from "./Assets/chair.webp"
import remote from "./Assets/remote.webp"
import all from "./Assets/all-logo.webp"

function Advertisement() {
    return (
        <div>
            <div className="ads1">
                <h1>Discover the next big things</h1>
                <div className="sub-ad1">
                    <div className="ads1-1">
                        <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/true-5g-desktop.webp" alt="heee" />
                        <div className="ads1-1-img">
                            <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/true5g.svg" alt="True 5G" />
                        </div>
                        <div className="ads1-1-text">
                            Now in 7,764
                            <br></br>
                            locations in India
                        </div>
                        <button className="ads1-1-button">check availability</button>
                    </div>
                    <div className="ads1-2">
                        <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/airfiber-desktop.webp" alt="heee" />
                        <div className="ads1-2-img">
                            <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/airfiber-icon.svg" alt="True 5G" />
                        </div>
                        <div className="ads1-2-text">
                            Available across 3939 towns in India
                        </div>
                        <button className="ads1-2-button">know more</button>
                    </div>
                </div>
            </div>
            <div className="ads2">
                <h1>Connecting Bharat with JioBharat</h1>
                <div className="ads2-video">
                    <video
                        src="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc.mp4"
                        disablepictureinpicture=""
                        controlslist="nodownload"
                        videourl="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc.mp4"
                        class="video"
                        preload="none"
                        poster="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc-thumbnail.png"
                        muted
                        controls
                    >
                        <source type="video/mp4" />
                        <source type="video/webm" />
                    </video>
                </div>
                <button className="ads2-button">Buy now</button>
            </div>
            <div className="ads3">
                <h1>Explore the digital world with Jio</h1>
                <p>Exciting shopping deals, a variety of entertainment and seamless digital experience.</p>
                <div className="ads3-1">
                    <img src=" https://jep-asset.akamaized.net/cms/assets/home/jiomart-home-desktop.webp" alt="" />
                    <div className="jiomart">
                        <svg width="123" height="40" viewBox="0 0 123 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1618_17615)">
                                <rect width="40" height="40" fill="#E30513"></rect>
                                <path d="M29.2373 14.5625C29.0024 14.3058 28.7166 14.1009 28.398 13.961C28.0795 13.8211 27.7352 13.7492 27.3873 13.75H24.9998V12.5C24.9998 11.1739 24.473 9.90215 23.5353 8.96447C22.5977 8.02679 21.3259 7.5 19.9998 7.5C18.6737 7.5 17.4019 8.02679 16.4643 8.96447C15.5266 9.90215 14.9998 11.1739 14.9998 12.5V13.75H12.6123C12.2644 13.7492 11.9201 13.8211 11.6015 13.961C11.283 14.1009 10.9971 14.3058 10.7623 14.5625C10.5316 14.8191 10.3551 15.1197 10.2434 15.4462C10.1317 15.7727 10.0871 16.1183 10.1123 16.4625L11.0623 27.8125C11.1409 28.7519 11.5704 29.6273 12.2653 30.2643C12.9602 30.9014 13.8696 31.2533 14.8123 31.25H25.2123C26.155 31.2533 27.0644 30.9014 27.7593 30.2643C28.4542 29.6273 28.8837 28.7519 28.9623 27.8125L29.9123 16.4625C29.9341 16.1166 29.8855 15.7699 29.7695 15.4433C29.6535 15.1167 29.4724 14.8171 29.2373 14.5625V14.5625ZM17.4998 12.5C17.4998 11.837 17.7632 11.2011 18.232 10.7322C18.7009 10.2634 19.3368 10 19.9998 10C20.6628 10 21.2987 10.2634 21.7676 10.7322C22.2364 11.2011 22.4998 11.837 22.4998 12.5V13.75H17.4998V12.5Z" fill="white"></path>
                            </g>
                            <g clip-path="url(#clip1_1618_17615)">
                                <path d="M71.9775 15.89C71.0625 15.365 69.99 15.1025 68.76 15.1025C67.53 15.1025 66.48 15.3575 65.565 15.8675C64.65 16.3775 63.9525 17.1012 63.4725 18.0387C62.9925 18.9762 62.7525 20.0525 62.7525 21.2675C62.7525 22.4825 62.9925 23.5775 63.4725 24.5075C63.9525 25.4375 64.65 26.1612 65.565 26.6787C66.48 27.1962 67.5525 27.455 68.7825 27.455C70.0125 27.455 71.0775 27.1962 71.9775 26.6787C72.8775 26.1612 73.5712 25.4412 74.0587 24.5187C74.5462 23.5962 74.79 22.5125 74.79 21.2675C74.79 20.0225 74.55 18.9837 74.07 18.0612C73.59 17.1387 72.8925 16.415 71.9775 15.89ZM70.9762 23.1912C70.7887 23.7087 70.5075 24.11 70.1325 24.395C69.7575 24.68 69.3075 24.8225 68.7825 24.8225C68.2575 24.8225 67.8075 24.68 67.4325 24.395C67.0575 24.11 66.7725 23.705 66.5775 23.18C66.3825 22.655 66.285 22.025 66.285 21.29C66.285 20.555 66.3825 19.8762 66.5775 19.3437C66.7725 18.8112 67.0575 18.4062 67.4325 18.1287C67.8075 17.8512 68.25 17.7125 68.76 17.7125C69.33 17.7125 69.7987 17.8625 70.1662 18.1625C70.5337 18.4625 70.8075 18.8787 70.9875 19.4112C71.1675 19.9437 71.2575 20.57 71.2575 21.29C71.2575 22.01 71.1637 22.6737 70.9762 23.1912V23.1912ZM57.7575 27.14H61.2675V15.395H57.7575V27.14V27.14ZM60.5812 10.4675C60.2737 10.3025 59.925 10.22 59.535 10.22C59.115 10.22 58.7512 10.3025 58.4437 10.4675C58.1362 10.6325 57.8962 10.85 57.7237 11.12C57.5512 11.39 57.465 11.7125 57.465 12.0875C57.465 12.4625 57.5512 12.7887 57.7237 13.0662C57.8962 13.3437 58.1325 13.5687 58.4325 13.7412C58.7325 13.9137 59.0925 14 59.5125 14C59.9325 14 60.2775 13.9175 60.5925 13.7525C60.9075 13.5875 61.1437 13.3625 61.3012 13.0775C61.4587 12.7925 61.5375 12.47 61.5375 12.11C61.5375 11.75 61.455 11.4087 61.29 11.1312C61.125 10.8537 60.8887 10.6325 60.5812 10.4675V10.4675ZM51.9075 22.01C51.9075 22.565 51.8587 23.015 51.7612 23.36C51.6637 23.705 51.495 23.9675 51.255 24.1475C51.015 24.3275 50.6775 24.4175 50.2425 24.4175C49.6275 24.4175 49.1812 24.2375 48.9037 23.8775C48.6262 23.5175 48.4875 22.94 48.4875 22.145H45V22.4825C45 23.5325 45.1987 24.4325 45.5962 25.1825C45.9937 25.9325 46.5862 26.5062 47.3737 26.9037C48.1612 27.3012 49.1325 27.5 50.2875 27.5C51.5475 27.5 52.5825 27.2937 53.3925 26.8812C54.2025 26.4687 54.8025 25.8537 55.1925 25.0362C55.5825 24.2187 55.7775 23.21 55.7775 22.01V11.5925H51.9075V22.01ZM121.699 24.53C121.309 24.53 120.997 24.4662 120.765 24.3387C120.532 24.2112 120.367 24.0087 120.27 23.7312C120.172 23.4537 120.124 23.0825 120.124 22.6175V17.9375H122.936V15.4625H120.124V11.93H116.591V23.09C116.591 24.11 116.76 24.9312 117.097 25.5537C117.435 26.1762 117.904 26.6262 118.504 26.9037C119.104 27.1812 119.861 27.32 120.776 27.32C121.691 27.32 122.381 27.245 122.981 27.095V24.4175C122.591 24.4925 122.164 24.53 121.699 24.53V24.53ZM112.687 15.6987C112.125 16.0962 111.716 16.6625 111.461 17.3975H111.349L111.281 15.395H107.996V27.14H111.484V21.8525C111.484 21.1025 111.596 20.4575 111.821 19.9175C112.046 19.3775 112.387 18.9575 112.845 18.6575C113.302 18.3575 113.891 18.2075 114.611 18.2075C114.836 18.2075 115.035 18.2187 115.207 18.2412C115.38 18.2637 115.526 18.2975 115.646 18.3425V15.215C115.376 15.14 115.046 15.1025 114.656 15.1025C113.906 15.1025 113.25 15.3012 112.687 15.6987V15.6987ZM85.0112 21.8975H84.9662L81.6587 11.5925H76.2812V27.14H79.8812V16.16H79.9712L83.4812 27.14H86.4512L89.9387 16.1375H90.0512V27.14H93.6287V11.5925H88.2512L85.0112 21.8975V21.8975ZM103.981 15.5862C103.209 15.2487 102.222 15.08 101.022 15.08C99.8225 15.08 98.9112 15.2112 98.1537 15.4737C97.3962 15.7362 96.8112 16.1262 96.3987 16.6437C95.9862 17.1612 95.72 17.7875 95.6 18.5225H98.9525C99.0425 18.1325 99.2412 17.8325 99.5487 17.6225C99.8562 17.4125 100.302 17.3075 100.887 17.3075C101.367 17.3075 101.75 17.3862 102.035 17.5437C102.32 17.7012 102.522 17.9375 102.642 18.2525C102.762 18.5675 102.822 18.965 102.822 19.445V19.985H100.932C99.6875 19.985 98.6337 20.1237 97.7712 20.4012C96.9087 20.6787 96.2525 21.0912 95.8025 21.6387C95.3525 22.1862 95.1275 22.895 95.1275 23.765C95.1275 24.53 95.2925 25.19 95.6225 25.745C95.9525 26.3 96.4212 26.7237 97.0287 27.0162C97.6362 27.3087 98.3525 27.455 99.1775 27.455C99.7925 27.455 100.344 27.3762 100.831 27.2187C101.319 27.0612 101.716 26.855 102.024 26.6C102.331 26.345 102.597 26.045 102.822 25.7H102.935L103.092 27.14H106.22V19.7375C106.22 18.6875 106.04 17.8175 105.68 17.1275C105.32 16.4375 104.754 15.9237 103.981 15.5862V15.5862ZM102.822 22.6625C102.822 23.1725 102.717 23.615 102.507 23.99C102.297 24.365 102.024 24.6462 101.686 24.8337C101.349 25.0212 100.947 25.115 100.482 25.115C100.122 25.115 99.815 25.055 99.56 24.935C99.305 24.815 99.0987 24.6387 98.9412 24.4062C98.7837 24.1737 98.705 23.8775 98.705 23.5175C98.705 23.0975 98.8175 22.7637 99.0425 22.5162C99.2675 22.2687 99.59 22.0887 100.01 21.9762C100.43 21.8637 100.932 21.8075 101.517 21.8075H102.822V22.6625V22.6625Z" fill="#FFFFFF"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1618_17615">
                                    <rect width="40" height="40" rx="20" fill="white"></rect>
                                </clipPath>
                                <clipPath id="clip1_1618_17615">
                                    <rect width="77.975" height="30" fill="white" transform="translate(45 5)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="h-text">
                    <h1>Deals feel like super deals here!</h1>
                    <p>JioMart brings you special offers daily.</p>
                    <button>Shop now</button>
                    </div>
                </div>
                <div className="ads3-2">
                 <div className="ads3-2-1">
                   <img src={image} alt=""/>
                   <div className="ads3-2-1-logo">
                   <img src="https://jep-asset.akamaized.net/cms/assets/home/jiotv-logo-n.svg" alt="" />
                   </div>
                   <h1>Catch prime time TV shows anytime</h1>
                   <p>Live TV shows, sports, movies, etc.</p>
                   <button>Get it now</button>
                 </div>
                 <div className="ads3-2-2">
                    <img src="https://jep-asset.akamaized.net/cms/assets/home/jiosaavn-stack-banner-desk.webp" alt=""/>
                    <div className="ads3-2-2-logo">
                   <img src="https://jep-asset.akamaized.net/cms/assets/home/jiosaavn-logo.svg" alt="" />
                   </div>
                    <h1>Relive the golden era of romance</h1>
                    <p>Explore JioSaavn for Bollywood love songs.</p>
                   <button>Get JioSaavn</button>

                 </div>
                </div>{/*ads3-2 */}
                <div className="ads3-3">
                 <div className="ads3-3-1">
                    <img src={chair} alt=""/>
                    <div className="ads3-3-1-logo">
                    <img src="https://jep-asset.akamaized.net/cms/assets/home/urban-ladder-logo.svg" alt=""/>
                    </div>
                    <h1>Find fancy furniture for every room</h1>
                    <p>Affordable range with 5-year warranty.</p>
                    <button>Shop now</button>
                 </div>
                 <div className="ads3-3-2">
                 <img src={remote} alt=""/>
                 <div className="ads3-3-2-logo">
                 <img src="https://jep-asset.akamaized.net/cms/assets/home/jiogames-logo.svg" alt=""/>
                 </div>
                 <h1>Experience gaming without any limits!</h1>
                 <p>Dive into a world full of online games.</p>
                 <button>Try JioGames</button>
                 </div>
                 <div className="ads3-3-3">
                 <img src={all} alt=""/>
                 <h1>Enrich your digital life with a host of Jio apps</h1>
                 <button>Explore now</button>
                 </div>
                </div>{/*ads3-3 */}
            </div>{/*ad3 */}
        </div>/*retun */
    )
}
export default Advertisement;