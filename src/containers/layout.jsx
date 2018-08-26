import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { 
  mdiArrowUpBold,
} from '@mdi/js';

import Tabs from './tabsContainer';

class Layout extends Component {

  scrollFunction = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("toTopBtn").style.display = "block";
    } else {
      document.getElementById("toTopBtn").style.display = "none";
    }
  };

  topFunction = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  render() {
    const { 
      countValue, 
      children, 
    } = this.props;

    window.onscroll = () => this.scrollFunction();

    return(
      <div className="main-layout">
        <Tabs
          counter = {countValue}
          />
        {children}
        <button 
          id="toTopBtn" 
          className="button to-top-btn"
          style={{display: 'none'}}
          onClick={this.topFunction}
        >
          <Icon 
            path={ mdiArrowUpBold }
            size={2}
            color="#fff"
          />
        </button>
      </div>
    );
  }
}

Layout.propTypes = {
  countValue: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

const mapStateToProps = (state) => {
  const { savedImages } = state;
  const { count } = savedImages;

  return {
    countValue: count,
  };
};

export default withRouter(connect(mapStateToProps, null)(Layout));