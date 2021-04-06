import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

/* import offlineicon1 from '../../../../assets/images/offline-icon-1.png';
import offlineicon2 from '../../../../assets/images/offline-icon-2.png';
import offlineicon3 from '../../../../assets/images/offline-icon-3.png';
import offlineicon4 from '../../../../assets/images/offline-icon-4.png'; */

SwiperCore.use([Navigation, Pagination]);

const offlinePresenceinner = (props) => {

    const slides = [];
    const offlinePresenceSlides = [];
    const offlineSalesSlides = [];

    for (let i = 0; i < 2; i += 1) {
        if (i === 0) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-heading text-center hide-lg-down">
                        <h2 className="our-offline-heading heading">{props.offlinepresence[0].offlinePresenceHeading.heading}</h2>
                    </div>
                    <div className="row">
                        {offlinePresenceSlides}
                        {/* <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-img">
                                    <img src={offlineicon1} alt="icons" />
                                </div>
                                <div className="offline-text">
                                    <h2><span className="counter-value" data-count="5000">0</span>+</h2>
                                    <span>dealers</span>
                                </div>
                            </div>
                        </div>
                        <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-img">
                                    <img src={offlineicon2} alt="icons" />
                                </div>
                                <div className="offline-text">
                                    <h2><span className="counter-value" data-count="50">0</span>+</h2>
                                    <span>top cities served in india</span>
                                </div>
                            </div>
                        </div>
                        <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-img">
                                    <img src={offlineicon3} alt="icons" />
                                </div>
                                <div className="offline-text">
                                    <h2><span className="counter-value" data-count="20">0</span> lakh+</h2>
                                    <span>units shipped</span>
                                </div>
                            </div>
                        </div>
                        <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-img">
                                    <img src={offlineicon4} alt="icons" />
                                </div>
                                <div className="offline-text">
                                    <h2><span className="counter-value" data-count="120">0</span>+</h2>
                                    <span>pan-india team</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
            );
        }
        else {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-heading text-center hide-lg-down">
                        <h2 className="our-offline-heading heading">{props.offlinepresence[4].offlinePresenceHeading.heading}</h2>
                    </div>
                    <div className="row">
                        {offlineSalesSlides}
                        {/* <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-text">
                                    <h4>North Zone</h4>
                                    <span>1 Trainer in Delhi and ASMs in Ludhiana, Delhi-NCR, Jaipur and Lucknow area</span>
                                </div>
                            </div>
                        </div>
                        <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-text">
                                    <h4>East Zone</h4>
                                    <span>1 Trainer in Kolkata and ASMs in Guwahati, Patna and Odisha area</span>
                                </div>
                            </div>
                        </div>
                        <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-text">
                                    <h4>West Zone</h4>
                                    <span>1 Trainer in Mumbai and ASMs in Pune, Bhopal, and Ahmedabad area</span>
                                </div>
                            </div>
                        </div>
                        <div className="pr-offline col-12 col-sm-6 p-2">
                            <div className="offline-card text-center">
                                <div className="offline-text">
                                    <h4>South Zone</h4>
                                    <span>1 Trainer in Chennai and ASMs in Hyderabad, Bangalore, and Cochin area</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </SwiperSlide>
            );
        }

    }
    for (let j = 0; j < props.offlinepresence.length; j++) {
        if (j !== 2 && j <= 3) {
            offlinePresenceSlides.push(
                <div className="pr-offline col-12 col-sm-6 p-2">
                    <div className="offline-card text-center">
                        <div className="offline-img">
                            <img src={props.offlinepresence[j].offlinePresenceData.image.url} alt="icons" />
                        </div>
                        <div className="offline-text">
                            <h2><span className="counter-value" data-count={props.offlinepresence[j].offlinePresenceData.heading}>{props.offlinepresence[j].offlinePresenceData.heading}</span>+</h2>
                            <span>{props.offlinepresence[j].offlinePresenceData.subheading}</span>
                        </div>
                    </div>
                </div>
            )   
        }
        else if (j >= 4 && j <= props.offlinepresence.length) {
            offlineSalesSlides.push(
                <div className="pr-offline col-12 col-sm-6 p-2">
                    <div className="offline-card text-center">
                        {/* <!-- <div className="offline-img">
                                            <img src={offlineicon4} alt="icons" />
                                        </div> --> */}
                        <div className="offline-text">
                            <h4>{props.offlinepresence[j].offlinePresenceData.heading}</h4>
                            <span>{props.offlinepresence[j].offlinePresenceData.subheading}</span>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            offlinePresenceSlides.push(
                <div className="pr-offline col-12 col-sm-6 p-2">
                    <div className="offline-card text-center">
                        <div className="offline-img">
                            <img src={props.offlinepresence[j].offlinePresenceData.image.url} alt="icons" />
                        </div>
                        <div className="offline-text">
                            <h2><span className="counter-value" data-count={props.offlinepresence[j].offlinePresenceData.heading}>{props.offlinepresence[j].offlinePresenceData.heading}</span> lakh+</h2>
                            <span>{props.offlinepresence[j].offlinePresenceData.subheading}</span>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <Swiper
            className="swiper-container"
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            onInit={(swiper) => console.log('Swiper intialized!', swiper)}
            onSlideChange={(swiper) => console.log('Slide Index changed to:', swiper.activeIndex)}
            onReachEnd={() => console.log('Swiper end reached')} >
            {slides}
        </Swiper>
    );
}

export default offlinePresenceinner;