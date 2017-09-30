import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from './Card';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    dataList: PropTypes.array,
  }
  render() {
    const { title, id, dataList } = this.props;
    return (
      <div className="section" id={id}>
        <h2>{title}</h2>
        {
          // dataList.map(
          //   data =>
          //     <Card
          //       {...data}
          //     />
          // )
        }
        <Link to="/about">Show about</Link>
      </div>
    );
  }
}
