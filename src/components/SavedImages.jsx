import React, {Component} from 'react';
import {connect} from 'react-redux';
import TabsContainer from '../containers/tabsContainer';

class SavedImages extends Component {
  render() {
    return(
      <div>
        <TabsContainer />
        Saved images
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state.savedImages state', state);
  return {
    images: state.savedImages
  }
}

export default connect(mapStateToProps, null)(SavedImages)