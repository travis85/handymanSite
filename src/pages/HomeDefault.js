import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutFour from '../components/about/AboutFour';
import ProjectOne from '../components/project/ProjectOne';
import ServiceThree from "../components/services/ServiceThree";
import FaqOne from "../components/faq/FaqOne";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import BlogOne from "../components/blog/BlogOne";
import FooterOne from "../common/footer/FooterOne";
import { Element } from 'react-scroll'
import ProjectThree from "../components/project/ProjectThree";
const HomeDefault = () => {
    return (
        <>
            <HeaderOne />
            <HeroOne />
            <Element name="services">
                <ServiceThree />
            </Element>
            <Element name="about">
                <AboutFour />
            </Element>
            <Element name="portfolio">
                {/* <ProjectOne /> */}
                <ProjectThree />
            </Element>
            <Element name="faq">
                <FaqOne />
            </Element>
            <Element name='testimonials'>
                <TestimonialThree />
            </Element>
            <Element name="blog">
                <BlogOne />
            </Element>
            <FooterOne />
        </>
    )
}

export default HomeDefault;