import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.module.scss';
import _ from 'lodash';

function Projects(props) {
  const [temp, setTemp] = useState(0);
  const tempRef = useRef(); // 定義一個 ref

  const {
  } = props;

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div id="projects" styleName="projects">
      <div styleName="titleWrapper">
        <div styleName="title">Projects</div>
        <div styleName="line" />
      </div>
      <div styleName="projectWrapper">
        <div styleName="project ">
          <div styleName="name">
            <span styleName="icon">&#xe638;</span>
            <a styleName="content">fredchen000/test</a>
          </div>
          <div styleName="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna.
          </div>
          <div styleName="info">
            <span styleName="star">&#xe664;</span><span>3</span>
            <span styleName="fork">&#xe625;</span><span>10</span>
          </div>
        </div>
        <div styleName="project"></div>
        <div styleName="project"></div>
        <div styleName="project"></div>
      </div>
      <a className="btn btn-outline-secondary btn-lg" styleName="more ">More Projects</a>
    </div>
  );
}

Projects.defaultProps = {
};

Projects.propTypes = {
};

export default Projects;
