import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
    return (
        <div className="container">
            <section className="footer-subscription">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="footer-subscription-heading alert alert-success">
                            <Link to="/services">Link with react Dom</Link>
                        </p>
                        <p className="alert alert-success">
                            <a href="services">Link without reactdom</a>
                        </p>
                    </div>
                </div>
            </section>
            <div className="row">
               <div className="col-md-6 footer-col">
                   <h2>About us</h2>
                   <Link to="/signup" className="btn btn-info">How it works</Link>
                   <Link to="/products" className="btn btn-info">Testimonials</Link>
               </div>
               <div className="col-md-6 footer-col">
                   <h2>About us</h2>
                   <Link to="/signup" className="btn btn-info">How it works</Link>
                   <Link to="/services" className="btn btn-info">Services</Link>
               </div>
            </div>
        </div>
    )
}
export default Footer;
