import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Tabs from './tabsContainer';

class Layout extends Component {
  render() {
    const { 
      countValue, 
      children, 
    } = this.props;

    return(
      <div>
        <Tabs
          counter = {countValue}
          />
        {children}
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