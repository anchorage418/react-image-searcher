import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import ShowMoreBtn from './ShowMoreBtn';
import Image from './Image';

class ResultImages extends Component {
  render() {
    const {
      images,
      query,
      loading,
      columnCount,
      saveImageStart,
      showMoreImagesStart,
    } = this.props;

    return(
        images && !images.length && !loading ?
        <div className="result-images__placeholder-text">
          Ready to search
        </div> :
        images && !images.length && loading ?
          <div className="loader__container">
            <Loader 
              type="Ball-Triangle"
              width={200}
              height={200}
              color="#940a5a"
            /> 
          </div> :
        <div className="column-container">
          <div className={`column-count-${columnCount}`}>
            {
              images.map((image, index) => {
                return(
                  <Image 
                  imageObj={image} 
                  key={index} 
                  saveImageStart={saveImageStart}
                  />
                );
              })
            }
          </div>
          {
            images && images.length && loading ?
            <div className="loader__container">
              <Loader 
                type="Ball-Triangle"
                width={200}
                height={200}
                color="#940a5a"
              /> 
            </div> : null
          }
          <ShowMoreBtn
            query={query}
            showMoreImagesStart={showMoreImagesStart}
          />
        </div>
    );
  }
}

ResultImages.propTypes = {
  images: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  columnCount: PropTypes.string.isRequired,
  saveImageStart: PropTypes.func.isRequired,
  showMoreImagesStart: PropTypes.func.isRequired,
};

export default ResultImages;
