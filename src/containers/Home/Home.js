import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimatedRoute } from 'react-router-transition';
import { Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

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

  goDetail = (type) => {
    this.props.history.push(`/detail/${type}`);
  }

  render() {
    const { isExact } = this.props.match;

    document.getElementsByTagName('html')[0].style.overflow = isExact ? 'auto' : 'hidden';

    return (
      <div id="pageHome">
        <HomeTitle />
        <ParallaxProvider>
          {
            webJson.map((sectionData, index) =>
              <Section
                reverse={index % 2 === 0}
                key={sectionData.key}
                title={sectionData.title}
                dataList={sectionData.dataList.slice(-3).reverse()}
                id={sectionData.key}
                goDetail={this.goDetail}
                desc={sectionData.desc}
              />
            )
          }
        </ParallaxProvider>
        <div className={`menu ${!isExact && 'slideIn'}`}>
          {
            webJson.map(sectionData => (
              <Link className="link" to={`/detail/${sectionData.key}`}>{sectionData.title}</Link>
            ))
          }
        </div>
        <div className={`goHome ${!isExact && 'slideIn'}`}>
          <Link to="/">{'<-'}</Link>
        </div>
        <AnimatedRoute
          className="animateRoute"
          path="/detail/:type"
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
