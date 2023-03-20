import React from 'react';
import {Link} from 'react-router-dom';

export default class HeroOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.slider-carousel').length) {
            $('.slider-carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              nav: false,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 6000,
              navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow"></span>'],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                1024: {
                  items: 1
                }
              }
            });
          }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="slider-one-sec style3">
                    <div className="slider-carousel owl-carousel owl-theme">
                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/HomePagePhoto.jpeg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h2>Let us help your vision <br /> become a reality.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Slider One Single */}

                        

                    </div>
                </section>
            </>
        )
    }
}