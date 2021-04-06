import React from 'react';
import Portfolio from './Portfolio/Portfolio'
import './Portfolios.css';

import {Query} from 'react-apollo';
import PORTFOLIO_QUERY from './Portfolio/Query';

/* import portfolio1 from '../../../assets/images/partners-icon-1.png';
import portfolio2 from '../../../assets/images/partners-icon-2.png';
import portfolio3 from '../../../assets/images/partners-icon-3.png';
import portfolio4 from '../../../assets/images/partners-icon-4.png';
import portfolio5 from '../../../assets/images/partners-icon-5.png';
import portfolio6 from '../../../assets/images/partners-icon-6.png';
import portfolio7 from '../../../assets/images/partners-icon-7.png';
import portfolio8 from '../../../assets/images/partners-icon-8.png';
import portfolio9 from '../../../assets/images/partners-icon-9.png';
import portfolio10 from '../../../assets/images/partners-icon-10.png';
import portfolio11 from '../../../assets/images/partners-icon-11.png';
import portfolio12 from '../../../assets/images/partners-icon-12.png'; */

const portfolios = () => {
    return(
		<Query query={PORTFOLIO_QUERY}>
			{({loading, error, data}) => {
				if (loading) return <section className="partners-manage bg-gray" id="partners-manage">Fetching portfolios data</section>
				if (error) return <section className="partners-manage bg-gray" id="partners-manage">Error while Fetching portfolios data</section>

				const items = data.portfoliosWeManages;

				return(
					<section className="partners-manage bg-gray" id="partners-manage">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="pr-heading text-center">
										<h2 className="heading">Portfolios We Manage</h2>
									</div>
									<div className="partners-manage-innner">
										<ul className="partners-manage-imgs">
											{items.map(item => <Portfolio key={item.id} portfolioImage={item} />)}
											{/* <li><img src={portfolio1} alt="" /></li>
											<li><img src={portfolio2} alt="" /></li>
											<li><img src={portfolio3} alt="" /></li>
											<li><img src={portfolio4} alt="" /></li>
											<li><img src={portfolio5} alt="" /></li>
											<li><img src={portfolio6} alt="" /></li>
											<li><img src={portfolio7} alt="" /></li>
											<li><img src={portfolio8} alt="" /></li>
											<li><img src={portfolio9} alt="" /></li>
											<li><img src={portfolio10} alt="" /></li>
											<li><img src={portfolio11} alt="" /></li>
											<li><img src={portfolio12} alt="" /></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				)
			}}
		</Query>
    );
}

export default portfolios;