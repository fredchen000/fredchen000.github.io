import React, { useState, useEffect, useLayoutEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { scroller } from "react-scroll";
import './styles.module.scss';
import Navigator from '@components/Navigator';
import Starfield from '@components/Starfield';
import {personal_info, info_icon_config} from '@info/info';

function Home() {
  const info_used = ["mail", "linkedin", "github"];
  return (
    <div id="home" styleName="home">
      <Starfield />
      <div styleName="frontPage">
        <div styleName="name">Fred Chen</div>
        <p styleName="motto">I come, I see, I ... CODE!</p>
        <div styleName="contacts">
          {_.map(info_icon_config, (item, index) =>{
            if(info_used.includes(item.key)){
              return(
                <div styleName="icon">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.icon}
                  </a>
                </div>
              );
            }
          })}
        </div>
        <Link to="/#about">
          <button
            styleName="more"
            onClick={() => {
              scroller.scrollTo('about', {
                smooth: true,
                offset: -80,
                duration: 500,
              });
            }}
          >See More</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
