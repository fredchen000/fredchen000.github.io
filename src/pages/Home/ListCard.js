import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.module.scss';


function ListCard(props) {
  return (
    <div styleName="listCard">
      <div styleName="program">
        <div styleName="name">{props.name}</div>
        {props.place ? <div styleName="place ">{props.place}</div> : null}
      </div>
      <div styleName="detail">
        <div styleName="name">{props.title}</div>
        <div styleName="date ">{props.date}</div>
      </div>
      {props.other ? <div styleName="awards ">{props.other}</div> : null}
    </div>
  );
}

ListCard.defaultProps = {
};

ListCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  other: PropTypes.string,
  place: PropTypes.string,
};

export default ListCard;
