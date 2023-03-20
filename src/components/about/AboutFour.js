import React from 'react';
import {Link} from 'react-router-dom';

export default class AboutFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="about-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-three__img">
                                    <div className="inner">
                                        <img src={publicUrl+"assets/images/backgrounds/aboutUsPhoto.jpeg"} alt="#" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="about-three__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <span className="left"></span><h6> ABOUT US </h6> <span className="right"></span>
                                        </div>
                                    </div>

                                    <div className="about-three__content-inner">
                                        <div className="text1">
                                            <p>We're a company that's dedicated to rebuilding Detroit
                                                and the surrounding area by providing a quality and affordable service to our clients. </p>
                                        </div>
                                        <div className="text2">
                                            <h4>We aim for perfection </h4>
                                        </div>
                                        <ul className="about-three__content-list">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Residential </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Commercial </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Demolition</p>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}