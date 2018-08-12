import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    // const imagesArray = Object.keys(images).map((key)=>{
    //   return images[key];
    // });
    console.log('images', images);
    // console.log('imagesArray', imagesArray);
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

const mapDispatchToProps = {
  saveImageStart,
  showMoreImagesStart,
}

const mapStateToProps = (state) => {
  const { resultImages } = state;
  const {
    result,
    query,
  } = resultImages;
  return {
    images: result,
    query,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultImagesLayout);