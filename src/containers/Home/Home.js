import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimatedRoute } from 'react-router-transition';
import { Link } from 'react-router-dom';

import HomeTitle from './components/HomeTitle';
import Section from './components/Section';
import DetailPage from './components/DetailPage';

import webJson from './webData.json';
import './Home.less';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
  }

  goDetail = () => {
    this.props.history.push('/detail');
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
              dataList={sectionData.dataList.slice(-4).reverse()}
              id={sectionData.key}
              goDetail={this.goDetail}
            />
          )
        }
        <div className={`goHome ${!isExact && 'slideIn'}`}>
          <Link to="/">{'<-'}</Link>
        </div>
        <AnimatedRoute
          className="animateRoute"
          path="/detail"
          component={DetailPage}
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
