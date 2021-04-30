import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import InfoCard from './InfoCard';
import ListCard from './ListCard';
import './styles.module.scss';
import {personal_info, about_me, education_info, work_info, info_icon_config} from '@info/info';
import _ from 'lodash';

function About() {
  const [temp, setTemp] = useState(0);
  const tempRef = useRef(); // 定義一個 ref

  return (
    <div id="about" styleName="about">
      <div styleName="leftPanel">
        <div styleName="contact">Contact</div>
        <div styleName="name">{personal_info.name +" ("+personal_info.prefered_name+")"}</div>
        <div styleName="title">Fullstack Developer</div>
        {_.map(info_icon_config, (item, index) =>{
          let linked = false;
          if(item.href!='') linked = true;
          return(
            <InfoCard
              icon={item.icon}
              target={item.display}
              linked={linked}
              href={item.href}
            />
          );
        })}
      </div>
      <div styleName="rightPanel">
        <div styleName="intro">
          <div styleName="content">
            <div styleName="title">About Me</div>
            <div styleName="aboutMe">
              {about_me}
            </div>
          </div>
          <div styleName="photo"></div>
        </div>
        <div styleName="experience">
          <div styleName="title">Education</div>
          {_.map(education_info, (item, index) =>{
            return(
              <ListCard
                name={item.name}
                title={item.title}
                date={item.date}
                other={item.awards}
              />
            );
          })}
        </div>
        <div styleName="experience">
          <div styleName="title">Work Experience</div>
          {_.map(work_info, (item, index) =>{
            return(
              <ListCard
                name={item.name}
                title={item.title}
                date={item.date}
                place={item.place}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

About.defaultProps = {
};

About.propTypes = {
};

export default About;
