import React from 'react';
import './Casestudies.css';
import { Tabs, Tab } from 'react-bootstrap';

import amazefit from '../../../assets/images/case-study-slider-1-amazefit.jpg';
import apple from '../../../assets/images/case-study-slider-1-apple.jpg';
import lenovo from '../../../assets/images/case-study-slider-1-lenovo.jpg';
import sony from '../../../assets/images/case-study-slider-1-sony.jpg';


const casestudies = () => {
    return(
        <React.Fragment>
            <section class="bg-gray pr-case-studies" id="pr-case-studies">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="pr-heading text-center">
                                <h2 class="heading">Case Studies</h2>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-11 offset-lg-1 pr-0">
                            <div class="case-study-tab">
                                <Tabs defaultActiveKey="amazfit" id="case-study-tab">
                                    <Tab eventKey="amazfit" title="AMAZFIT">
                                        <div class="case-study-inner">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12 col-sm-6 order-1 order-sm-2 pr-sm-0">
                                                        <div class="case-img text-center">
                                                            <img class="w-100" src={amazefit} alt="banner" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 order-2 order-sm-1 d-flex align-items-center">
                                                        <div class="case-text">
                                                            <p>The rampant success of Amazfit’s launch in India</p>
                                                            <p>How we managed to provide strategic business consulting to sustain brand sales and turn a brand with 0% market share into one of the biggest smartwatch brands in India.</p>
                                                            <a class="pr-case-btn pr-cust-btn btn" target="_blank" href="amazfit.php">Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="apple" title="APPLE">
                                        <div class="case-study-inner">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12 col-sm-6 order-1 order-sm-2 pr-sm-0">
                                                        <div class="case-img text-center">
                                                            <img class="w-100" src={apple} alt="banner" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 order-2 order-sm-1 d-flex align-items-center">
                                                        <div class="case-text">
                                                            <p>Overachieving targets with Apple</p>
                                                            <p>From managing a solitary product to distributing the iPhone, iMac, and Macbook in India, we have come a long way by overachieving targets and setting up our own stores in major cities across India.</p>
                                                            <a class="pr-case-btn pr-cust-btn btn" target="_blank" href="apple.php">Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="lenovo" title="LENOVO">
                                        <div class="case-study-inner">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12 col-sm-6 order-1 order-sm-2 pr-sm-0">
                                                        <div class="case-img text-center">
                                                            <img class="w-100" src={lenovo} alt="banner" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 order-2 order-sm-1 d-flex align-items-center">
                                                        <div class="case-text">
                                                            <p>Spearheading Lenovo’s wearable distribution</p>
                                                            <p>We were the first and exclusive distributors to bring Lenovo into the Indian market for smart wearables & accessories. Our end-to-end business solutions helped introduce the brand’s smart bands and smartwatches in the country.</p>
                                                            <a class="pr-case-btn pr-cust-btn btn" target="_blank" href="lenovo.php">Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="sony" title="SONY">
                                        <div class="case-study-inner">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-12 col-sm-6 order-1 order-sm-2 pr-sm-0">
                                                        <div class="case-img text-center">
                                                            <img class="w-100" src={sony} alt="banner" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 order-2 order-sm-1 d-flex align-items-center">
                                                        <div class="case-text">
                                                            <p>Successfully distributing Sony’s accessories across India</p>
                                                            <p>We led the distribution of Sony’s consumer electronics in UP West in 2013. This helped us bag the award for being one of the top 5 distributors of Sony Accessories in this region.</p>
                                                            <a class="pr-case-btn pr-cust-btn btn" target="_blank" href="sony.php">Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default casestudies;