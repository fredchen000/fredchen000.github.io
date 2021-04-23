import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.module.scss';
import _ from 'lodash';

function Template(props) {
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
      Template
    </div>
  );
}

Template.defaultProps = {
};

Template.propTypes = {
};

export default Template;
