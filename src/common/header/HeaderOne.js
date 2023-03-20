import React from 'react';
import {Link} from "react-router-dom";
import LogoBlack from './LogoBlack';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import LogoBox from './LogoBox';
import OffCanvasStyleOne from './OffCanvasStyleOne';

export default class HeaderOne extends React.Component {
    render(){
        return (
            <>
                <header className="main-header main-header-three clearfix">
                    <div className="main-header-three__wrapper">

                        <div className="main-header-three__top clearfix">
                            <div className="container">
                                <div className="main-header-three__top-inner">
                                    <div className="left">
            
                                    </div>

                                    <div className="right">
                                        <div className="title">
                                            <p>Get Social With Us!</p>
                                        </div>

                                        <ul className="social-links">
                                            <li><a href="https://facebook.com"><span className="icon-facebook-app-symbol"></span></a></li>
                                            <li><a href="https://twitter.com"><span className="icon-twitter"></span></a></li>
                                            <li><a href="https://google.com"><span className="icon-google-plus-logo"></span></a></li>
                                            <li><a href="https://linkedin.com"><span className="icon-linkedin"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-three__middle">
                            <div className="container">
                                <div className="main-header-three__middle-inner">
                                    <LogoBox />

                                    <div className="contact-info">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <div className="text-box">
                                                    <h3>Our Location</h3>
                                                    <p>Serving Metro Detroit</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="text-box">
                                                    <h3>Email Us</h3>
                                                    <p className="email"><a href="mailto:tflake83@gmail.com">tflake83@gmail.com</a>
                                                    </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <div className="text-box">
                                                    <h3>Call Us</h3>
                                                    <p className="number"><a href="tel:7343417846">734-341-7846</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-three__bottom">
                            <div className="container">
                                <div className="main-header-three__bottom-inner">
                                    <div className="main-header-one__bottom-left">
                                        <nav className="main-menu main-menu--1">
                                            <div className="main-menu__inner">
                                                <MobileMenu />
                                                <div className="stricky-one-logo">
                                                    <LogoBlack />
                                                </div>
                                                <Nav />
                                            </div>
                                        </nav>
                                    </div>


                                    {/* <div className="main-header-one__bottom-right">
                                        <div className="side-content-button-box">
                                            <OffCanvasStyleOne />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
            </>
        )
    }
}