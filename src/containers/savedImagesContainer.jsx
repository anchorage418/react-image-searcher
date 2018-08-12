import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SavedImages from '../components/SavedImages';

import {
  deleteImageStart,
  saveImageStart,
} from '../actions/index';

class SavedImagesContainer extends Component {
  render() {
    const {
      images,
      deleteImageStart,
      saveImageStart,
    } = this.props;

    return(
      <div>
        <SavedImages
         images={images}
         deleteImageStart={deleteImageStart}
         saveImageStart={saveImageStart}
        />
      </div>
    );
  }
}

SavedImagesContainer.propTypes = {
  images: PropTypes.array.isRequired,
  saveImageStart: PropTypes.func.isRequired,
  deleteImageStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteImageStart,
  saveImageStart,
};

const mapStateToProps = (state) => {
  const { savedImages } = state;
  const { saved } = savedImages;
  return {
    images: saved
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedImagesContainer);