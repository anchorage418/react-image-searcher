import React, {Component} from 'react';
import {connect} from 'react-redux';

import ResultImages from '../components/ResultImages';

class ResultImagesLayout extends Component {
  render() {
    const {
      images,
      columnCount,
    } = this.props;
    const iamgesArray = Object.keys(images).map((key)=>{
      return images[key];
    });
    return(
      <div>
        <ResultImages 
          images={iamgesArray}
          columnCount={columnCount}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { resultImages } = state;

  return {
    images: resultImages,
  }
}

export default connect(mapStateToProps, null)(ResultImagesLayout);