import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FontAwesome from 'react-fontawesome';
import Scroll from 'react-scroll';
import particleSetting from './particle.json';

const Element = Scroll.Element;
const scroll = Scroll.animateScroll;

export default class HomeTitle extends Component {
  scrollDown = () => {
    scroll.scrollTo(window.innerHeight);
  }

  render() {
    const particleStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
    };

    return (
      <div className="section" id="homeTitle">
        <Particles width="100%" height="100%" style={particleStyle} params={particleSetting} />
        <div className="welcome">
          <h3>Hello, Wellcome to</h3>
          <h1>ReactMaker</h1>
        </div>
        <div onClick={this.scrollDown} className="scrollDown bounce">
          <FontAwesome name="chevron-down" />
        </div>
      </div>
    );
  }
}
