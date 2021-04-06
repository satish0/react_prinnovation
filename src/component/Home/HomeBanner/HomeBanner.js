import React, {Component} from 'react';
import Bannersection from './Bannersection/Bannersection';
import { Query } from 'react-apollo';
import BANNERS_QUERY from './Bannersection/query';

class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartbanneritems: []
        };
    }
    render() {
        return(
            <Query query={BANNERS_QUERY}>
                {({ loading, error, data }) => {

                    if (loading) return <section className="pr-banner" id="pr-banner">Fetching products.....</section>
                    if (error) return <section className="pr-banner" id="pr-banner">Error : </section>

                    const banneritems = data.bannercontents;
                    return (
                        <section className="pr-banner" id="pr-banner">
                            <Bannersection key={banneritems.id} product={banneritems} />
                        </section>
                    )
                }}
            </Query>
        )
    }
}

export default HomeBanner;