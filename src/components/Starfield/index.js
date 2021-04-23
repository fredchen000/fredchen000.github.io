import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import raf from 'raf';
import _ from 'lodash';

import './styles.module.scss';
import Particle from './particle';

const Starfield = (props) => {
  const starfieldRef = useRef();
  const canvasRef = useRef();

  const {
    numParticles,
    lineWidth,
    alphaFactor,
    depth
  } = props;

  const [size, setSize] = useState({});
  useEffect(() => {
    setSize({ width: starfieldRef.current.clientWidth, height: starfieldRef.current.clientHeight});
    if(size.width){
      _reset(props);
      _draw();
      _update();
      _tickRaf = raf(function tick() {
        // Animation logic
        _draw();
        _update();
        raf(tick);
      });
    }
    window.addEventListener('resize', updateSize);
    return () => {
      raf.cancel(_tickRaf);
      window.removeEventListener('resize', updateSize);
    };
  }, [size.width, size.height]);

  const updateSize = () => {
    setSize({ width: starfieldRef.current.clientWidth, height: starfieldRef.current.clientHeight});
  };

  /* parameters*/
  const vp = {
    x: size.width / 2,
    y: size.height / 2
  };

  const bounds = {
    depth,
    width: size.width,
    height: size.height,
    x: { min: -vp.x, max: size.width - vp.x },
    y: { min: -vp.y, max: size.height - vp.y },
    z: { min: -depth, max: 300 }
  };

  var particles = [];
  var _tickRaf;

  /* helper function*/
  const _reset = (props) => {
    const {
      numParticles,
      depth
    } = props;
    for (let i = 0; i < numParticles; ++i) {
      particles.push(new Particle(bounds));
    }
  };

  const _update = () => {
    for (let i = 0; i < particles.length; ++i) {
      particles[i].update();
    }
  };

  const _draw = () => {
    if (!canvasRef) return;
    const ctx = canvasRef.current.getContext('2d');
    const {
      alphaFactor,
      lineWidth
    } = props;

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
    <div ref={starfieldRef} styleName="backgrounds">
      <canvas
        ref={canvasRef}
        width={size.width}
        height={size.height}
      ></canvas>
    </div>
  );
};

Starfield.defaultProps = {
  numParticles: 300,
  lineWidth: 2.5,
  alphaFactor: 0.9,
  depth: 300,
};

Starfield.propTypes = {
  numParticles: PropTypes.number,
  lineWidth: PropTypes.number,
  alphaFactor: PropTypes.number,
  depth: PropTypes.number,
};

export default Starfield;
