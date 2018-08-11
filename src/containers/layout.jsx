import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import Tabs from './tabsContainer';

class Layout extends Component {
  render() {
    const { countValue, children } = this.props;

    return(
      <div>
        <Tabs
          counter = {countValue}
        />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { savedImages } = state;
  const { count } = savedImages;

  return {
    countValue: count,
  }
}

export default withRouter(connect(mapStateToProps, null)(Layout));