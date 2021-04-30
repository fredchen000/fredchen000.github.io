import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.module.scss';
import _ from 'lodash';

function Blogs(props) {
  const [temp, setTemp] = useState(0);
  const tempRef = useRef(); // 定義一個 ref

  const {
  } = props;

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div id="blogs" styleName="blogs ">
      <div styleName="titleWrapper ">
        <div styleName="title">Recent Blogs</div>
        <div styleName="line " />
      </div>
      <div styleName="posts ">
        <div styleName="post ">
          <div styleName="image"></div>
          <div styleName="detail">
            <div styleName="topContent">
              <div styleName="title">This is title</div>
              <div styleName="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna.
              </div>
            </div>
            <div styleName="bottomContent ">
              <div styleName="author "><span styleName="icon">&#xe606;</span>Fred Chen</div>
              <div styleName="date "><span styleName="icon">&#xe835;</span>July 7th</div>
            </div>
          </div>
        </div>
        <div styleName="post ">
          <div styleName="image"></div>
          <div styleName="detail">
            <div styleName="topContent">
              <div styleName="title">This is title</div>
              <div styleName="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna.
              </div>
            </div>
            <div styleName="bottomContent ">
              <div styleName="author "><span styleName="icon">&#xe606;</span>Fred Chen</div>
              <div styleName="date "><span styleName="icon">&#xe835;</span>July 7th</div>
            </div>
          </div>
        </div>
        <div styleName="post ">
          <div styleName="image"></div>
          <div styleName="detail">
            <div styleName="topContent">
              <div styleName="title">This is title</div>
              <div styleName="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna.
              </div>
            </div>
            <div styleName="bottomContent ">
              <div styleName="author "><span styleName="icon">&#xe606;</span>Fred Chen</div>
              <div styleName="date "><span styleName="icon">&#xe835;</span>July 7th</div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-outline-secondary btn-lg" styleName="more">Read More</a>
    </div>
  );
}

Blogs.defaultProps = {
};

Blogs.propTypes = {
};

export default Blogs;
