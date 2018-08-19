import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ShowMoreBtn from './ShowMoreBtn';
import Image from './Image';

class ResultImages extends Component {
  render() {
    const {
      images,
      query,
      columnCount,
      saveImageStart,
      showMoreImagesStart,
    } = this.props;

    return(
        images && !images.length ?
        <div className="result-images__placeholder-text">
          Ready to search
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
  columnCount: PropTypes.string.isRequired,
  saveImageStart: PropTypes.func.isRequired,
  showMoreImagesStart: PropTypes.func.isRequired,
};

export default ResultImages;
