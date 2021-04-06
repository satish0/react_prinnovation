import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Awardsrecognition.css';
import awardsicon1 from '../../../assets/images/awards-icon-1.png';
import awardsicon2 from '../../../assets/images/awards-icon-2.png';
import awardsicon3 from '../../../assets/images/awards-icon-3.png';
import awardsicon4 from '../../../assets/images/awards-icon-4.png';
import awardsicon5 from '../../../assets/images/awards-icon-2.png';
import awardsicon6 from '../../../assets/images/awards-icon-5.png';
import awardsicon7 from '../../../assets/images/awards-icon-6.png';
import awardsicon8 from '../../../assets/images/awards-icon-7.png';
import awardsicon9 from '../../../assets/images/awards-icon-8.png';

SwiperCore.use([Navigation, Pagination]);

const awardsrecognition = () => {

    const slides = [];
    let awardsicons = [awardsicon1, awardsicon2, awardsicon3, awardsicon4, awardsicon5, awardsicon6, awardsicon7, awardsicon8, awardsicon9];

    for (let i = 0; i < 9; i +=1) {
        if (i === 0) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>Highest Market Share Award (2008) for Samsung Mobile in India.</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 1) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>One of the Top 5 Distributors of Sony Accessories in India.</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 2) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>Achievement vs Target Award by Apple for FY 2013-2014.</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 3) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>Best seller out of 3000 sellers across India</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 4) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>No 1 Distributor for Sony LCD Televisions in UP West.</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 5) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>Top 3 Distributor in India</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 6) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>All India Highest Selling Distributor</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else if (i === 7) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>Best Distribution Award</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="pr-awards">
                        <div className="awards-icon-img text-center">
                            <img className="w-100" src={awardsicons[i]} alt="banner" />
                        </div>
                        <div className="awards-text text-center">
                            <p>Top Regional Distributor Award</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
    }

    return(
        <React.Fragment>
            <section className="awards-recognition awards-parallax-dim bg-blue" id="awards-recognition" data-aos="fade-up"  data-aos-duration="1500">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pr-heading text-center">
                                <h2 className="heading">Awards & Recognition</h2>
                            </div>
                            <div className="pr-awards-inner">
                                <Swiper
                                    className="pr-awards-inner"
                                    navigation
                                    pagination={{ clickable: true }}
                                    spaceBetween={0}
                                    slidesPerView={5}
                                    onInit={(swiper) => console.log('Swiper intialized!', swiper)}
                                    onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex)}
                                    onReachEnd={() => console.log('Swiper end reached')} >
                                    {slides}
                                </Swiper>
                                {/* <div className="swiper-container">
                                    <div className="swiper-wrapper swipper-padd-bottom">
                                        <div className="swiper-slide">
                                            
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                        <div className="swiper-slide">
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default awardsrecognition;