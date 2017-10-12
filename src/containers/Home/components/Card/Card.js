import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './Card.less';

export default class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }
  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl,
    } = this.props;
    const bgStyle = {
      backgroundImage: `URL("${img}")`
    };
    return (
      <div className="card">
        <div className="bgimg" style={bgStyle} />
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
        <div className="cardInfo">
          <div className="title" title={name}>{name}</div>
          <div className="des" title={description}>{description}</div>
        </div>
      </div>
    );
  }
}
