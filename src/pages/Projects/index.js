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
    <div styleName="temp">
      Projects
    </div>
  );
}

Projects.defaultProps = {
};

Projects.propTypes = {
};

export default Projects;
