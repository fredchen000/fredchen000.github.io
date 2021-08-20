import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { scroller } from "react-scroll";
import PropTypes from 'prop-types';

function ScrollToAnchor(props) {

  let history = useHistory();
  const scrollTo = (offset, id) => {
    scroller.scrollTo(id, {
      smooth: true,
      offset: offset,
      duration: 500,
    });
  };

  const [locationHash, setLocationHash] = useState('');
  useEffect(()=>{
    setLocationHash(history.location.hash);
    scrollTo(-80, locationHash.replace('#', ''));
    console.log(history);
  },[locationHash]);

  return null;
}

export default ScrollToAnchor;
