import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { demo_info } from '@info/info';

import './styles.module.scss';
import DemoCard from './demo';

function Demos(props) {
  const [temp, setTemp] = useState(0);
  const tempRef = useRef(); // 定義一個 ref

  const {
  } = props;

  useEffect(() => {
    return () => {
    };
  }, []);
  return (
    <div id="demo" styleName="blogs ">
      <div styleName="titleWrapper ">
        <div styleName="title">Demos</div>
        <div styleName="line" />
      </div>
      <div styleName="posts ">
        {_.map(demo_info, (item, index) =>{
          return(
            <DemoCard
              key={index}
              image={item.image}
              title={item.title}
              link={item.link}
              description={item.description}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
}

Demos.defaultProps = {
};

Demos.propTypes = {
};

export default Demos;
