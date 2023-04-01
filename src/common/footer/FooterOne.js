import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs'
import { Link as LinkRoll } from 'react-scroll'


export default class FooterOne extends React.Component {
    render(){
        const publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <footer className="footer-one-sec">
                    <div className="footer-one__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/footer-v1-pattern.png)'}}></div>
                    <div className="footer-one__top">
                        <div className="footer-one__top-img"
                            style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/footer-v1-img3.png)'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__top-inner">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                                <div className="footer-widget__column footer-widget__about">
                                                    <div className="footer-widget__about-logo">
                                                        <img src={publicUrl + "assets/images/brand/handyHammerLogoWhite.png"} alt="Logo" />
                                                        <div className='footer_contact_info'>
                                                            
                                                            <p>
                                                               
                                                               <span className="icon-phone-call"></span> <a href="tel:7343417846">Call Us</a> <br />
                                                                <span className="icon-email"></span><a href="mailto:handyhammersdetroit@gmail.com">Email Us</a>
                                                            </p>
                                                            
                                                        </div>
                                                        
                                                    </div>

                                                    
                                                </div>
                                                <div className="footer-widget__about-social-link">
                                                        <p>Get social with us!</p>
                                                        <ul>
                                                            <li>
                                                                <a href="https://www.instagram.com/handy_hammers/">
                                                                    <span className="first "><AiOutlineInstagram/></span>
                                                                    <span className="second "><AiOutlineInstagram/></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://www.facebook.com/profile.php?id=100091252729048">
                                                                    <span className="first "><BsFacebook/></span>
                                                                    <span className="second"><BsFacebook/></span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                                <div className="footer-widget__column footer-widget__services">
                                                    {/* <h2 className="footer-widget__title">Our Services</h2> */}
                                                    <ul className="footer-widget__services-list">
                                                        
                                                        <li className="footer-widget__services-list-item">
                                                            <LinkRoll active Class="active" to="services" spy={true} smooth={true} offset={50} duration={500} >Company Services</LinkRoll>
                                                        </li>
                                                        <li className="footer-widget__services-list-item">
                                                            <LinkRoll active Class="active" to="about" spy={true} smooth={true} offset={50} duration={500} >About Us</LinkRoll>
                                                        </li>
                                                        <li className="footer-widget__services-list-item">
                                                            <LinkRoll active Class="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</LinkRoll>
                                                        </li>
                                                        <li className="footer-widget__services-list-item">
                                                            <LinkRoll active Class="active" to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</LinkRoll>
                                                        </li>
                                                        <li className="footer-widget__services-list-item">
                                                            <LinkRoll active Class="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>Testimonials</LinkRoll>
                                                        </li>
                                                            
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                                <div className="footer-widget__column footer-widget__posts">
                                                    <h2 className="footer-widget__title">Home Tips</h2>
                                                    <div className="footer-widget__posts-list">
                                                        <ul>
                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/footer/creativeRemodel.webp"} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <a href={'https://www.thisoldhouse.com/cabinets/21018036/21-ways-to-save-on-your-house-remodel'}>
                                                                            {/* <span className="icon-link"></span> */}
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p><a href={'https://www.thisoldhouse.com/cabinets/21018036/21-ways-to-save-on-your-house-remodel'}>
                                                                        Creative ways to afford your next remodel.
                                                                    </a></p>
                                                                    
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/footer/hottestTrends.jpeg"} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <a href={'https://www.goodhousekeeping.com/home/decorating-ideas/g38502403/interior-design-trends-2022/?utm_source=google&utm_medium=cpc&utm_campaign=arb_ga_ghk_d_bm_prog_org_us_g38502403&gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaU1-yAxM4laGIF9xODDJgi_gk4j_bTex-z6nRdV4j7ZzliYHg_6A2EaApZAEALw_wcB'}>
                                                                            {/* <span className="icon-link"></span> */}
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>
                                                                        <a href={'https://www.goodhousekeeping.com/home/decorating-ideas/g38502403/interior-design-trends-2022/?utm_source=google&utm_medium=cpc&utm_campaign=arb_ga_ghk_d_bm_prog_org_us_g38502403&gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaU1-yAxM4laGIF9xODDJgi_gk4j_bTex-z6nRdV4j7ZzliYHg_6A2EaApZAEALw_wcB'}>
                                                                            Hottest Home Trends <br/>
                                                                            of 2023
                                                                        </a>
                                                                    </p>
                                                                    
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/footer/100handytips.jpeg"} style={{height: 46, width: 70}} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <a href={'https://www.familyhandyman.com/list/100-of-the-handiest-home-tips/'}>
                                                                            {/* <span className="icon-link"></span> */}
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>
                                                                        <a href={'https://www.familyhandyman.com/list/100-of-the-handiest-home-tips/'}>
                                                                            100 Handy Home tips
                                                                        </a>
                                                                    </p>
                                                                    
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-one__bottom clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__bottom-inner">
                                        <div className="footer-one__bottom-text">
                                            <p>
                                                Copyright &copy;2023. All rights reserved to <br/>
                                                <span id='companyName'> Handy Hammers LLC </span>

                                            </p>
                                        </div>

                                        {/* <div className="footer-one__bottom-list">
                                            <ul>
                                                <li><Link to="/about-one">Terms & Condition </Link></li>
                                                <li><Link to="/about-one"> Services</Link></li>
                                                <li><Link to="/about-one">Careers</Link></li>
                                            </ul>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}