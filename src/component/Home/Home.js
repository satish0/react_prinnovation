import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import WhyPartners from './WhyPartners/WhyPartners';
import OfflinePresence from './OfflinePresence/OfflinePresence';
import Portfolios from './Portfolios/Portfolios';
import Ourpartners from './Ourpartners/Ourpartners';
import Awardsrecognition from './Awardsrecognition/Awardsrecognition';
import Casestudies from './Casestudies/Casestudies';

const home = () => {
    return(
        <React.Fragment>
            <HomeBanner />
            <WhyPartners />
            <OfflinePresence />
            <Portfolios />
            <Ourpartners />
            <Awardsrecognition />
            <Casestudies />
        </React.Fragment>
    );
}

export default home;