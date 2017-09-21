import React, { Component } from 'react';
import HomeTitle from './components/HomeTitle';
import Section from './components/Section';
import webJson from './webData.json';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <HomeTitle />
        {
          webJson.map(sectionData =>
            <Section
              key={sectionData.key}
              title={sectionData.title}
              dataList={sectionData.dataList}
              id={sectionData.key}
            />
          )
        }
      </div>
    );
  }
}
