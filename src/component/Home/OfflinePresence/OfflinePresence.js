import React from 'react';
import './OfflinePresence.css';
import { Query } from 'react-apollo';
import OFFLINEPRESENCE_QUERY from './OfflinePresenceInner/Query';
import OfflinePresenceInner from './OfflinePresenceInner/OfflinePresenceInner'

import indiamap from '../../../assets/images/offline-india-map.png';

const offlinepresence = () => {
    return(
        <React.Fragment>
            <Query query={OFFLINEPRESENCE_QUERY}>
                {({loading, error, data}) => {
                    if (loading) return <section className="our-offline bg-blue" id="our-offline">Fetching details from offline Presence api</section>
                    if (error) return <section className="our-offline bg-blue" id="our-offline">Error while Fetching details from offline Presence api</section>
                    
                    const offlinePresencesitems = data.offlinePresences;

                    return(
                        <section className="our-offline bg-blue" id="our-offline">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-5 order-1">
                                        <div className="pr-heading text-center hide-lg-up">
                                            <h2 className="our-offline-heading heading">{offlinePresencesitems[0].offlinePresenceHeading.heading}</h2>
                                        </div>
                                        <div className="offline-map" data-aos="zoom-in" data-aos-duration="1500">
                                            <img className="w-100" src={indiamap} alt="india_map_image" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 offset-lg-1 order-2">
                                        <OfflinePresenceInner offlinepresence={offlinePresencesitems} />
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

export default offlinepresence;