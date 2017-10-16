import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FontAwesome from 'react-fontawesome';
import particleSetting from './particle.json';


export default class HomeTitle extends Component {
  render() {
    const particleStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
    };
    return (
      <div className="section" id="homeTitle">
        <Particles width="100%" height="100%" style={particleStyle} params={particleSetting} />
        <h1>Hello, Wellcome to <br/> ReactMaker</h1>
        <div className="scrollDown bounce">
          <FontAwesome name="chevron-down" />
        </div>
      </div>
    );
  }
}
