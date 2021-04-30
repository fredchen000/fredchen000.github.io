import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { scroller } from "react-scroll";
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './styles.module.scss';
import { navs_config } from "@info/info";
import _ from 'lodash';

function Navigator(props) {
  const navbarRef = useRef();
  const [expanded, setExpanded] = useState(false);
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

  const linkOnclick = (e, offset, id) => {
    setExpanded(false);
    scroller.scrollTo(id, {
      smooth: true,
      offset: offset,
      duration: 500,
    });
  };

  return (
    <Navbar
      collapseOnSelect
      bg={navbarStatus ? props.bgColor : props.initBgColor}
      ref={navbarRef}
      className="py-3 fixed-top"
      styleName="navBody"
      variant={navbarStatus? props.variant : props.initVariant}
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand
        href="#home"
        styleName="brand"
        className="navbar-brand brand"
        onClick={(e) => linkOnclick(e, 0, "home")}
      >
        {`<Home />`}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-inverse text-light"
        styleName="toggler"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        styleName="collapse"
      >
        <Nav className="mr-auto">
          {_.map(navs_config, (item, index)=>{
            return(
              <Link
                to={`#${item.toLowerCase()}`}
                key={index}
                styleName="link"
                className={`nav-link ${navbarStatus? props.textColor : props.initTextColor}`}
                onClick={(e) => linkOnclick(e, -80, item.toLowerCase())}
              >
                {item}
              </Link>
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
