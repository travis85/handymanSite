import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs'
import { Link as LinkRoll } from 'react-scroll'

const menuData = [
    {
        title: 'Services',
        path: 'services',
    },
    {
        title: 'About',
        path: 'about',
    },
    {
        title: 'Portfolio',
        path: 'portfolio',
    },
    {
        title: 'FAQ',
        path: 'faq',
    },
    {
        title: 'Testimonials',
        path: 'testimonials',
    },
];

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background: #ff5e14;
        color: #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    color: #fff;
    font-weight: 400;
`;

const DropdownLink = styled(Link)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
        background: #ff5e14;
        cursor: pointer;
        color: #fff;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink onClick={item.subNav && showSubnav}>
                <div>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    );
};

const NavIcon = styled(Link)`
    color: #ff5e14;
    font-size: 3rem;
    height: 10px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const SidebarNav = styled.nav`
    background-color: #001659;
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99999;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const publicUrl = process.env.PUBLIC_URL+'/'

    return (
        <>
            <>
                <NavIcon to="#">
                    <AiOutlineBars onClick={showSidebar} />
                </NavIcon>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <div className="mobile-nav__content">
                            <div className="logo-box">
                                <img src={"assets/images/brand/handyHammerLogoWhite.png"} alt="" />
                            </div>
                            <NavIcon to="#" className='mobile-nav__close'>
                                <AiIcons.AiOutlineClose
                                    style={{
                                        color: 'white',
                                        fontSize: '18px',
                                        justifyContent: 'flex-start',
                                    }}
                                    onClick={showSidebar}
                                />
                            </NavIcon>
                            {menuData.map((item, index) => (
                                <LinkRoll active onClick={showSidebar} Class="active" to={item.path} spy={true} smooth={true} offset={50} duration={500}>
                                    <SubMenu item={item} key={index}/>
                                </LinkRoll>
                            ))}
                            <ul className="mobile-nav__contact list-unstyled">
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <a href="mailto:tflake83@gmail.com.com">tflake83@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:7343417846">734-341-7846</a>
                                </li>
                            </ul>
                            <div className="mobile-nav__top">
                                <div className="mobile-nav__social">
                                    
                                    <a href="https://facebook.com">
                                        <span className="first "><AiOutlineInstagram/></span>
                                    </a>
                                    <a href="https://twitter.com">
                                        <span className="first "><BsFacebook/></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SidebarWrap>
                </SidebarNav>
            </>
        </>
    );
};

export default MobileMenu;