import React from 'react';
// import {Link} from "react-router-dom";
import { Link } from 'react-scroll'


const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    {/* <li> <Link to={process.env.PUBLIC_URL + `/`}> Home </Link> </li> */}
                    <li>
                        <Link active Class="active" to="services" spy={true} smooth={true} offset={50} duration={500} >Services</Link>
                    </li>
                    <li>
                        <Link active Class="active" to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                    </li>
                    <li>
                        <Link active Class="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
                    </li>
                    <li>
                        <Link active Class="active" to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
                    </li>
                    <li>
                        <Link active Class="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link>
                    </li>
                    <li >
                        <Link active Class="active" to="blog" spy={true} smooth={true} offset={50} duration={500}>Design Tips</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


