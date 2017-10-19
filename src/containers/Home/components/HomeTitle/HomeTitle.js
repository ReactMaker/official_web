import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class HomeTitle extends Component {
  render() {
    const particleStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
    };
    return (
      <div className="section" id="homeTitle">
        <Particles style={particleStyle} />
        <h1>Hello, We are ReactMaker!</h1>
      </div>
    );
  }
}
