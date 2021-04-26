import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './styles.module.scss';
import _ from 'lodash';

function Navigator(props) {
  const navbarRef = useRef();
  const [navbarStatus, setNavbarStatus] = useState(false);

  useEffect(()=>{
    const changeNavbarStyle = () => {
      if (window.pageYOffset >= 80) {
        setNavbarStatus(true);
      } else {
        setNavbarStatus(false);
      }
    };

    window.addEventListener('scroll', changeNavbarStyle);

    return () => {
      window.removeEventListener('scroll', changeNavbarStyle);
    };
  },[navbarStatus]);

  const navs_config = [
    "About",
    "Blogs",
    "Projects",
    "Contact"
  ];

  return (
    <Navbar
      bg={navbarStatus ? props.bgColor : props.initBgColor}
      ref={navbarRef}
      className="py-3 fixed-top"
      styleName="navBody"
      variant={navbarStatus? props.variant : props.initVariant}
      expand="lg"
    >
      <HashLink
        smooth
        styleName="brand"
        className="navbar-brand  brand"
        to="/#home"
      >
        {`<Home />`}
      </HashLink>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-inverse text-light"
        styleName="toggler"
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        styleName="collapse"
      >
        <Nav className="mr-auto">
          {_.map(navs_config, (item, index)=>{
            return(
              <HashLink
                smooth
                key={index}
                styleName="link"
                className={`nav-link ${navbarStatus? props.textColor : props.initTextColor}`}
                to={`/#${item.toLowerCase()}`}
              >{item}</HashLink>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Navigator.propTypes = {
  bgColor: PropTypes.string,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  initBgColor: PropTypes.string,
  initVariant: PropTypes.string,
  initTextColor: PropTypes.string,
};

Navigator.defaultProps = {
  bgColor: "transparant",
  variant: "dark",
  textColor: "text-light",
};

export default Navigator;
