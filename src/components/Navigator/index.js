import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './styles.module.scss';
import _ from 'lodash';

function Navigator(props) {

  const navs_config = [
    "About",
    "Blogs",
    "Projects",
    "Contact"
  ];

  return (
    <Navbar
      bg={props.bgColor}
      className="py-3"
      styleName="navBody"
      variant={props.variant}
      sticky="top"
      expand="lg"
    >
      <Navbar.Brand href="/"><h4>{`<Home />`}</h4></Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-inverse text-light"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {_.map(navs_config, (item, index)=>{
            return(
              <Nav.Link
                key={index}
                className={`h5 ${props.textColor}`}
                href={`/${item.toLowerCase()}`}
              >{item}</Nav.Link>
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
};

Navigator.defaultProps = {
  bgColor: "transparant",
  variant: "dark",
  textColor: "text-light",
};

export default Navigator;
