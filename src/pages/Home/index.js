import React, { useState, useEffect, useLayoutEffect, useRef} from 'react';
import './styles.module.scss';
import Navigator from '@components/Navigator';
import Starfield from '@components/Starfield';

function Home() {
  return (
    <div styleName="home">
      <Starfield />
      <Navigator />
      <div styleName="frontPage">
        <div styleName="name">Fred Chen</div>
        <blockquote className="blockquote text-center">
          <p styleName="motto">Stay Hungry, Stay Foolish</p>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
