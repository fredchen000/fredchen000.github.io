/*
author: Liang-Yu (taipei-frog)
modified from: https://codepen.io/loktar00/pen/uEJKl?editors=0110
*/

import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import raf from 'raf';
import _ from 'lodash';

import './styles.module.scss';

const ScrollingTerrain = (props) => {
  const wrapperRef = useRef();
  const canvasRef = useRef();

  const {
  } = props;

  // const {
  //   numParticles,
  //   lineWidth,
  //   alphaFactor,
  //   depth
  // } = props;

  const [size, setSize] = useState({});
  const updateSize = () => {
    setSize({ width: starfieldRef.current.clientWidth, height: starfieldRef.current.clientHeight});
  };

  useEffect(() => {
    setSize({ width: wrapperRef.current.clientWidth, height: wrapperRef.current.clientHeight});
    if(size.width){
      // _reset(props);
      // _draw();
      // _update();
      // _tickRaf = raf(function tick() {
      //   // Animation logic
      //   _draw();
      //   _update();
      //   raf(tick);
      // });
    }
    window.addEventListener('resize', updateSize);
    return () => {
      // raf.cancel(_tickRaf);
      window.removeEventListener('resize', updateSize);
    };
  }, [size.width, size.height]);

  /* parameters*/
  const options ={
    scrollDelay: 90,
    fillStyle: "#191D4C",
    mHeight: size.height,
  };

  const points = [];
  const displacement = options.displacement || 140;
  const power = Math.pow(2, Math.ceil(Math.log(size.width) / (Math.log(2))));

  points[0] = options.mHeight;
  points[power] = points[0];
  let _tickRaf;

  /* helper function*/
  // const _reset = (props) => {
  //   const {
  //     numParticles,
  //     depth
  //   } = props;
  //   for (let i = 0; i < numParticles; ++i) {
  //     particles.push(new Particle(bounds));
  //   }
  // };

  // const _update = () => {
  //   for (let i = 0; i < particles.length; ++i) {
  //     particles[i].update();
  //   }
  // };

  const _draw = () => {
    if (!canvasRef) return;
    const ctx = canvasRef.current.getContext('2d');

    ctx.save();
    ctx.translate(vp.x, vp.y);
    ctx.clearRect(-vp.x, -vp.y, bounds.width, bounds.height);
    ctx.lineWidth = lineWidth;

    for (let i = 0; i < particles.length; ++i) {
      const p = particles[i];

      p.s = bounds.depth / (bounds.depth + p.z);
      p.sx = p.x * p.s;
      p.sy = p.y * p.s;
      p.alpha = alphaFactor * (bounds.z.max - p.z) / (bounds.z.max / 2);

      ctx.beginPath();
      ctx.moveTo(p.sx, p.sy);
      ctx.lineTo(p.osx, p.osy);
      ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.lightness + '%, ' + p.alpha + ')';
      ctx.stroke();
    }

    ctx.restore();
  };

  return (
    <div ref={wrapperRef} styleName="backgrounds">
      <canvas
        ref={canvasRef}
        width={size.width}
        height={size.height}
      ></canvas>
    </div>
  );
};

ScrollingTerrain.defaultProps = {
};

ScrollingTerrain.propTypes = {
};

export default ScrollingTerrain;
