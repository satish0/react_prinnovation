import React from 'react';
import './Header.css';
import logo from '../../../assets/images/pr-logo-white.png';

const header = () => {
    return(
        <React.Fragment>
            <section className="pr-navbar deks">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pr-navbar-inner pr-navbar-inner-mob">
                                <nav className="navbar navbar-dark navbar-expand-lg justify-content-between">
                                    <a className="pr-brand navbar-brand" href="index.php">
                                        <img className="pr-logo w-100" src={logo} alt="logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="pr-nav align-items-end" id="navbar-list-mob">
                                        <span className="navbar-toggler close"><i className="fa fa-times"></i></span>
                                        <ul className="" id="menu-main">
                                            <li>
                                                <a href="index.php">Home</a>
                                            </li>
                                            <li>
                                                <a href="aboutus.php">About Us</a>
                                            </li>
                                            <li className="dropdown_caret">
                                                <a href="services.php" role="button">Services</a>
                                                <ul className="dropdown-mob">
                                                    <li className="new-product-launches">
                                                        <a href="#new-product-launches">New Product Launches</a>
                                                    </li>
                                                    <li className="countrywide-distribution">
                                                        <a href="#countrywide-distribution">Countrywide Distribution</a>
                                                    </li>
                                                    <li className="certifications-licensing">
                                                        <a href="#certifications-licensing">Certifications & Licensing</a>
                                                    </li>
                                                    <li className="marketing-retailing">
                                                        <a href="#marketing-retailing">Marketing & Retailing</a>
                                                    </li>
                                                    <li className="warehousing-support">
                                                        <a href="#warehousing-support">Warehousing Support</a>
                                                    </li>
                                                    <li className="after-sales-services">
                                                        <a href="#after-sales-services">After-Sales Services</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_caret">
                                                <a className="xyz" role="button">Media</a>
                                                <ul className="dropdown-mob">
                                                    <li className="news">
                                                        <a href="news.php">News</a>
                                                    </li>
                                                    <li className="press-release">
                                                        <a href="press-release.php">Press Release</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_caret">
                                                <a className="xyz" role="button">industry</a>
                                                <ul className="dropdown-mob">
                                                    <li className="mobility">
                                                        <a href="mobility.php">Mobility</a>
                                                    </li>
                                                    <li className="retailers">
                                                        <a href="retailers.php">Retailers</a>
                                                    </li>
                                                    <li className="consumer-electronics">
                                                        <a href="consumer-electronics.php">Consumer Electronics</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_caret">
                                                <a className="xyz" role="button">case studies</a>
                                                <ul className="dropdown-mob">
                                                    <li className="amazfit">
                                                        <a href="amazfit.php">Amazfit</a>
                                                    </li>
                                                    <li className="apple">
                                                        <a href="apple.php">Apple</a>
                                                    </li>
                                                    <li className="lenovo">
                                                        <a href="lenovo.php">Lenovo</a>
                                                    </li>
                                                    <li className="sony">
                                                        <a href="sony.php">Sony</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#pr-footer">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default header;