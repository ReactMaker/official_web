import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <img src={img} alt={name} />
        <a href={demoUrl}>Demo</a>
        <a href={repoUrl} >Repo</a>
      </div>
    );
  }
}
