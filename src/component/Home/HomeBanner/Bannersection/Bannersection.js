import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './Bannersection.css';
/* import bannervideo from '../../assets/images/video-sllide-3.mov';
import bannervideoposter from '../../assets/images/video-banner-1.jpg';
import bannerimgd1 from '../../assets/images/home-page-sony-tv-3.jpg';
import bannerimgm1 from '../../assets/images/sony-mobile-banner-3.jpg';
import bannerimgd2 from '../../assets/images/home-main-banner-2-deks.jpg';
import bannerimgm2 from '../../assets/images/home-main-banner-2-mob.jpg'; */

SwiperCore.use([Navigation, Pagination]);

const bannersection = (props) => {
    const slides = [];
    /* let bannerimgd = [bannervideo, bannerimgd1, bannerimgd2];
    let bannerimgm = [bannervideo, bannerimgm1, bannerimgm2]; */

    for (let i = 0; i < 3; i +=1) {
        if (i === 0) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="banner-item">
                        <div className="banner-img">
                            <video autoplay="" defaultmuted="" playsinline="" preload="auto" oncontextmenu="return false;" autobuffer="" muted="" id="myvideo" poster={props.product[i].imageOrVideoPoster.url}>
                                <source src={props.product[i].imageOrVideo[0].url} type="video/mp4" id="source" />
                            </video>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
        else {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className="banner-item">
                        <div className="banner-img">
                            <picture>
                                <source media="(max-width: 575px)" srcset={props.product[i].imageOrVideo[1].url} />
                                <img className="w-100" src={props.product[i].imageOrVideo[0].url} alt={`Slide ${i}`} />
                            </picture>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="banner-text">
                                    <h2 className="banner-heading top-bar">{props.product[i].heading}</h2>
                                    <p>{props.product[i].subheading}</p>
                                    <a target="_blank" href="mobility.php">{props.product[i].buttonText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            );
        }
    }

    return(
        <React.Fragment>
            <Swiper 
                id="pr-banner-swiper" 
                className="pr-banner-swiper" 
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper intialized!', swiper)}
                onSlideChange={(swiper) => console.log('Slide index changed to:', swiper.activeIndex ) }
                onReachEnd={() => console.log('Swiper end reached')} >
                    {slides}
            </Swiper>
        </React.Fragment>
    );
}

export default bannersection;