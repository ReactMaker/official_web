import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import webJson from '../../webData.json';

import './DetailPage.less';

export default class DetailPage extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  render() {
    const { type } = this.props.match.params;
    const matchObject = webJson.find(item => item.key === type);

    return (
      <div className="detailPage">
        <p>數量：{matchObject.dataList.length}</p>
        <div className="detailContainer">
          {
            matchObject &&
            [...matchObject.dataList].reverse().map(
              data =>
                <Card
                  {...data}
                />
            )
          }
        </div>
      </div>
    );
  }
}
