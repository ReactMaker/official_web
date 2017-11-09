import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import FontAwesome from 'react-fontawesome';
// import particleSetting from './particle.json';

export default class HomeTitle extends Component {
  render() {
    // const particleStyle = {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    // };

    // <Particles width="100%" height="100%" style={particleStyle} params={particleSetting} /> 先註解掉

    return (
      <div className="section" id="homeTitle">
        <div className="welcome">
          <h3>Hello, Wellcome to</h3>
          <h1>ReactMaker</h1>
        </div>
        <div className="scrollDown bounce">
          <FontAwesome name="chevron-down" />
        </div>
      </div>
    );
  }
}
