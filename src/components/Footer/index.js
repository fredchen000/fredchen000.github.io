import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {personal_info, info_icon_config} from '@info/info';

import './styles.module.scss';
import _ from 'lodash';

function Footer(props) {
  const [temp, setTemp] = useState(0);
  const tempRef = useRef(); // 定義一個 ref

  const {
  } = props;

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div styleName="footer">
      <div styleName="decorator" />
      <div styleName="welcome ">Get in Touch</div>
      <div styleName="more ">
        Thanks for your time. Feel free to contact me at&nbsp;
        <a
          href={info_icon_config.mail.href}
          target="_blank"
          rel="noreferrer noopener"
          styleName="email"
        >{personal_info.email}</a>
      </div>
      <div styleName="designed">
        Designed & Built by Liang-Yu, Chen. Open-sourced on&nbsp;
        <a
          href={personal_info.opensource}
          target="_blank"
          rel="noreferrer noopener"
          styleName="source "
        >Github</a>
      </div>
    </div>
  );
}

Footer.defaultProps = {
};

Footer.propTypes = {
};

export default Footer;
