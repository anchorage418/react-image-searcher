import React, { Component } from 'react';
import { connect } from 'react-redux';
import SavedImages from '../components/SavedImages';
import {
  deleteImageStart
} from '../actions/index';

class SavedImagesContainer extends Component {
  render() {
    const {
      images,
      deleteImageStart
    } = this.props;

    return(
      <div>
        <SavedImages
         images={images}
         deleteImageStart={deleteImageStart}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { savedImages } = state;
  return {
    images: savedImages
  }
}

const mapDispatchToProps = {
  deleteImageStart
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedImagesContainer);