import React from 'react';
import WhyPartner from './WhyPartner/WhyPartner';
import { Query } from 'react-apollo';
import WHYPARTNER_QUERY from './Query';

import './WhyPartners.css';
/* import whychooseicon1 from '../../../assets/images/why-choose-icon-1.png';
import whychooseicon2 from '../../../assets/images/why-choose-icon-2.png';
import whychooseicon3 from '../../../assets/images/why-choose-icon-3.png';
import whychooseicon4 from '../../../assets/images/why-choose-icon-4.png';
import whychooseicon5 from '../../../assets/images/why-choose-icon-5.png';
import whychooseicon6 from '../../../assets/images/why-choose-icon-6.png'; */

const partnersection = () => {
    return(
        <React.Fragment>
            <Query query={WHYPARTNER_QUERY}>
                {({ loading, error, data }) => {

                    if (loading) return <section className="pr-banner" id="pr-banner">Fetching products.....</section>
                    if (error) return <section className="pr-banner" id="pr-banner">Error : </section>

                    const items = data.whyPartners;
                    /* const bannervideoid = data.banners.video.id; */
                    return (
                        <section className="why-choose-us bg-gray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="pr-heading text-center">
                                            <h2 className="heading" data-aos="fade-up" data-aos-duration="1500">{items[0].headingAndButtonText.heading}</h2>
                                        </div>
                                        <div className="row">
                                            {items.map(item => <WhyPartner key={item.id} partner={item} />)}
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <a className="pr-cust-btn btn" href="services.php">{items[0].sectionButtonText.buttonText}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }}
            </Query>
        </React.Fragment>
    );
}

export default partnersection;