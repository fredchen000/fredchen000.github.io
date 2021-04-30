import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.module.scss';


function InfoCard(props) {
  return (
    <div styleName="card ">
      <div styleName="icon ">{props.icon}</div>
      {
        props.linked ?
          <div styleName="target ">
            <a
              href={props.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.target}
            </a>
          </div>
          :
          <div styleName="target ">{props.target}</div>
      }
    </div>
  );
}

InfoCard.defaultProps = {
};

InfoCard.propTypes = {
  icon: PropTypes.string,
  target: PropTypes.string,
  linked: PropTypes.bool,
  href: PropTypes.string,
};

export default InfoCard;
