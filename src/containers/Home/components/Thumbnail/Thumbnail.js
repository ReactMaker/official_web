import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Thumbnail.less';

export default class Thumbnail extends Component {
  static propTypes = {
    src: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      status: 'C',
    };
  }

  componentDidMount() {
    this.drawImage();

    this.box.addEventListener('mouseenter', () => {
      this.setState({
        status: 'I',
      });
    });

    this.box.addEventListener('mouseleave', () => {
      this.setState({
        status: 'C',
      });
    });
  }

  drawImage = () => {
    const img = new Image();
    img.src = this.props.src;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = this.canvas;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, 150, 150);
    };
  }

  render() {
    const bgStyle = {
      opacity: this.state.status === 'C' ? 0 : 1
    };

    return (
      <div ref={box => (this.box = box)} className="thumbnail">
        <canvas width="150" height="150" ref={canvas => (this.canvas = canvas)} />
        <img className="bgimg" style={bgStyle} src={`${this.props.src}?t=${Math.random()}`} alt=""/>
      </div>
    );
  }
}
