import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './styles.module.scss';
import Navigator from '@components/Navigator';

function Contact(props) {
  const [temp, setTemp] = useState(0);
  const tempRef = useRef(); // 定義一個 ref

  const {
  } = props;

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div styleName="contact">
      <Navigator
        bgColor="light"
        variant="light"
        textColor="text-secondary"
      />
      Contact
    </div>
  );
}

Contact.defaultProps = {
};

Contact.propTypes = {
};

export default Contact;
