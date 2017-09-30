import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimatedRoute } from 'react-router-transition';
import { Link } from 'react-router-dom';

import HomeTitle from './components/HomeTitle';
import Section from './components/Section';
import About from './components/About';
import webJson from './webData.json';
import './Home.less';

export default class Home extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  state = {
    show: false,
  }

  render() {
    const { isExact } = this.props.match;

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
        <div className={`goHome ${isExact ? '' : 'slideIn'}`}>
          <Link to="/">Show home</Link>
        </div>
        <AnimatedRoute
          className="aboutRouter"
          path="/about"
          component={About}
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        />
      </div>
    );
  }
}
