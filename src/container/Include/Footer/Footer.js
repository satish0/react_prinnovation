import React from 'react';
import './Footer.css';

const footer = () => {
    return(
        <React.Fragment>
            <section className="pr-footer bg-blue" id="pr-footer">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-5" data-aos="fade-up" data-aos-duration="1500">
                                <div className="footer-left pr-form">
                                    <div className="pr-heading text-center">
                                        <h2 className="heading">Get In touch with us!</h2>
                                    </div>
                                    <form className="pr-footer-from">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name*" required />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Email*" required />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="number" className="form-control" id="phone" name="phone*" placeholder="Phone*" maxLength="10" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject*" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="massage" id="massage" cols="" rows="5" placeholder="Your Message*" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">submit</button>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" required />
                                                <label className="form-check-label" htmlFor="gridCheck">Sign up for updates</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 pr-footer-right" data-aos="fade-up" data-aos-duration="1500">
                                <div className="footer-right">
                                    <div className="row">
                                        <div className="col-12 col-sm-4 col-lg-6 pb-4">
                                            <div className="footer-right-heading">
                                                <h2 className="ftr-heading">contact us</h2>
                                            </div>
                                            <nav className="navbar">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="index.php">Home</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="aboutus.php">About Us</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="services.php">Services</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="media.php">Press & News</a>
                                                    </li>
                                                    {/* <li className="nav-item">
                                                        <a className="nav-link" href="#">Industry</a>
                                                    </li> */}
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="case-studys.php">Case Studies</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="col-12 col-sm-8 col-lg-6">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-12 pb-4">
                                                    <div className="footer-right-heading">
                                                        <h2 className="ftr-heading">Quick links</h2>
                                                    </div>
                                                    <nav className="navbar quick-bottom-padd">
                                                        <ul className="navbar-nav">
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="#">A -325, Sector 46, Noida Uttar Pradesh 201301 India</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="tel:9971119580">Phone: 9971119580</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="mailto:Info@prinnovations.co.in">Email: Info@prinnovations.co.in</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-12">
                                                    <div className="footer-right-heading">
                                                        <h2 className="ftr-heading">Business Hours</h2>
                                                    </div>
                                                    <nav className="navbar">
                                                        <ul className="navbar-nav">
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="#">Monday - Friday- 9am to 5pm</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="#">Saturday & Sunday- 9am to 1pm</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="#">Note: All Commercial Holidays are Applicable</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" href="#">24 x 7 Live Customer Support Available</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                    <div className="social-links">
                                                        <a href="https://www.linkedin.com/in/prinnovations"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                        <a href="https://twitter.com/PRinnovationsIN"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                                                        <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                                        <a href="https://www.instagram.com/prinnovations/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                                        <a href="https://www.youtube.com/channel/UCTqPhVgDHWgFWC0-QASHNeQ"><i className="fa fa-youtube-square" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
            <section className="footer-copy-right">
                <div className="container-fluid">
                    <div className="row">
                        <div className="copy-right-inner"></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default footer;