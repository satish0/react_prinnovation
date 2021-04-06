import React from 'react';

const whyPartner = (props) => {
    return(
        <div className="col-12 col-sm-6 col-md-4 text-center" data-aos="fade-up" data-aos-duration="1500">
            <div className="why-choose-box">
                <div className="choose-img">
                    <img src={props.partner.image.url} alt="" />
                </div>
                <div className="choose-text">
                    <h4>{props.partner.subheading}</h4>
                    <p>{props.partner.text}.</p>
                </div>
            </div>
        </div>
    );
}

export default whyPartner;