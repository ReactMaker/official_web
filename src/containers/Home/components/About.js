import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './About.less';

export default class About extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  render() {
    const { params: { type } } = this.props.match;

    return (
      <div id="aboutPage">
        <div>
          {type}
        </div>
      </div>
    );
  }
}
