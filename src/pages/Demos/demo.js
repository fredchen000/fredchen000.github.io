import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.module.scss';


function Demo(props) {
  return (
    <div styleName="post"
      onClick={() => {
        window.open(props.link, '_blank');
      }}
    >
      <img styleName="image" src={props.image} />
      <div styleName="detail">
        <div styleName="topContent">
          <div styleName="title">{props.title}</div>
          <div styleName="description">
            {props.description}
          </div>
        </div>
        <div styleName="bottomContent">
          <div styleName="date"><span styleName="icon">&#xe835;</span>{props.date}</div>
        </div>
      </div>
    </div>
  );
}

Demo.defaultProps = {
};

Demo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default Demo;
