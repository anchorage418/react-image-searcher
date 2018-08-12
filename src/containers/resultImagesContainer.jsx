import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  saveImageStart,
  showMoreImagesStart,
} from '../actions/index';
import ResultImages from '../components/ResultImages';

class ResultImagesLayout extends Component {
  render() {
    const {
      images,
      query,
      columnCount,
      saveImageStart,
      showMoreImagesStart,
    } = this.props;

    return(
      <div>
        <ResultImages 
          images={images}
          query={query}
          columnCount={columnCount}
          saveImageStart={saveImageStart}
          showMoreImagesStart={showMoreImagesStart}
        />
      </div>
    );
  }
}

ResultImagesLayout.propTypes = {
  images: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  columnCount: PropTypes.string.isRequired,
  saveImageStart: PropTypes.func.isRequired,
  showMoreImagesStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  saveImageStart,
  showMoreImagesStart,
};

const mapStateToProps = (state) => {
  const { resultImages } = state;
  const {
    result,
    query,
  } = resultImages;
  return {
    images: result,
    query,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultImagesLayout);