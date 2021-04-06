import React from 'react';
import './Ourpartners.css';
import {Tabs, Tab} from 'react-bootstrap';
import { Query } from 'react-apollo';
import OURPARTNER_QUERY from './Ourpartner/Query';

/* import onlinechannel1 from '../../../assets/images/online-channels-icon-1.png';
import onlinechannel2 from '../../../assets/images/online-channels-icon-2.png';
import onlinechannel3 from '../../../assets/images/online-channels-icon-3.png';
import onlinechannel4 from '../../../assets/images/online-channels-icon-4.png';
import onlinechannel5 from '../../../assets/images/online-channels-icon-5.png';
import oflinechannel1 from '../../../assets/images/ofline-channels-icon-1.png';
import oflinechannel2 from '../../../assets/images/ofline-channels-icon-2.png';
import oflinechannel3 from '../../../assets/images/ofline-channels-icon-3.png';
import oflinechannel4 from '../../../assets/images/ofline-channels-icon-4.png'; */

const ourpartners = () => {
    return(
        <React.Fragment>
            <Query query={OURPARTNER_QUERY}>
                {({loading, error, data}) => {
                    if (loading) return <section className="pr-channels bg-white" id="channels">Fetching Content from Ourpartner API</section>
                    if (error) return <section className="pr-channels bg-white" id="channels">Error while Fetching Content from Ourpartner API</section>

                    const items = data.ourPartners;
                    const onlinechannel = [];
                    const offlinechannel = [];
                    const omnichannel = [];

                    for (let i = 0; i < items.length; i++) {
                        if (items[i].online !== null) {
                            onlinechannel.push(
                                <div className="channels-icon-img text-center">
                                    <img className="w-100" src={items[i].online.image.url} alt={items[i].online.image.fileName} />
                                </div>
                            );
                        }
                        if (items[i].offline !== null) {
                            offlinechannel.push(
                                <div className="channels-icon-img text-center">
                                    <img className="w-100" src={items[i].offline.image.url} alt={items[i].offline.image.fileName} />
                                </div>
                            );
                        }
                        if (items[i].omnichannel !== null) {
                            omnichannel.push(
                                <div className="channels-icon-img text-center">
                                    <img className="w-100" src={items[i].omnichannel.image.url} alt={items[i].omnichannel.image.fileName} />
                                </div>
                            );
                        }
                    }
                    
                    return (
                        <section className="pr-channels bg-white" id="channels">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="pr-heading text-center">
                                            <h2 className="heading">Our Partners</h2>
                                        </div>
                                        <Tabs defaultActiveKey="online" id="pr-channels-tab">
                                            <Tab eventKey="online" title="Online">
                                                <div className="channels online-channels">
                                                    {onlinechannel}
                                                    {/* <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={onlinechannel1} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={onlinechannel2} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={onlinechannel3} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={onlinechannel4} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={onlinechannel5} alt="banner" />
                                                    </div> */}
                                                </div>
                                            </Tab>
                                            <Tab eventKey="offline" title="Offline">
                                                <div className="channels ofline-channels">
                                                    {offlinechannel}
                                                    {/* <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel1} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel2} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel3} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel4} alt="banner" />
                                                    </div> */}
                                                </div>
                                            </Tab>
                                            <Tab eventKey="omnichannel" title="Omnichannel">
                                                <div className="channels ofline-channels">
                                                    {omnichannel}
                                                    {/* <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel1} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel2} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel3} alt="banner" />
                                                    </div>
                                                    <div className="channels-icon-img text-center">
                                                        <img className="w-100" src={oflinechannel4} alt="banner" />
                                                    </div> */}
                                                </div>
                                            </Tab>
                                        </Tabs>
                                        {/* <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Online</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Offline</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Omnichannel</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div className="channels online-channels">
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={onlinechannel1} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={onlinechannel2} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={onlinechannel3} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={onlinechannel4} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={onlinechannel5} alt="banner" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <div className="channels ofline-channels">
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel1} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel2} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel3} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel4} alt="banner" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <div className="channels ofline-channels">
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel1} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel2} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel3} alt="banner" />
                                            </div>
                                            <div className="channels-icon-img text-center">
                                                <img className="w-100" src={oflinechannel4} alt="banner" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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

export default ourpartners;