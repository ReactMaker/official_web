import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

import './Card.less';

import logo from '../../../../static/images/logo.png';

export default class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }

  state = {
    src: logo,
  }

  componentDidMount() {
    this.image.addEventListener('mouseenter', () => {
      this.setState({
        src: this.props.img,
      });
    });

    this.image.addEventListener('mouseleave', () => {
      this.setState({
        src: logo,
      });
    });
  }

  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl,
    } = this.props;

    return (
      <div className="card">
        <img ref={image => (this.image = image)} alt="" className="bgimg" src={this.state.src} />

        <div className="cardInfo">
          <div className="title" title={name}>{name}</div>
          <div className="des" title={description}>{description}</div>
          <div className="buttons">
            {
              demoUrl &&
              <a title="Demo" href={demoUrl} rel="noopener noreferrer" target="_blank">
                <div className="circle demo">
                  <FontAwesome name="laptop" />
                </div>
              </a>
            }
            {
              repoUrl &&
              <a title="Github" href={repoUrl} rel="noopener noreferrer" target="_blank">
                <div className="circle repo">
                  <FontAwesome name="github-alt" />
                </div>
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}
