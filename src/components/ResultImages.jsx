import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShowMoreBtn from './ShowMoreBtn';
import Image from './Image';

class ResultImages extends Component {
  render() {
    const {images, columnCount} = this.props;
    const iamgesArray = Object.keys(images).map((key)=>{
      return images[key];
    });

    if(Object.keys(images).length === 0) {
      return(
        <div>Ready to search</div>
      )
    } else {
      return(
        <div className="column-container">
          <div className={`column-count-${columnCount}`}>
            {
              iamgesArray.map( (image, index) => {
                return(
                  <Image imageObj={image} key={index} />
                )
              } )
            }
          </div>
          <ShowMoreBtn />
        </div>
      );
    }

  }
}

const mapStateToProps = (state) => {
  console.log('state.resultImages', state.resultImages);
  return {
    images: state.resultImages
  }
}

export default connect(mapStateToProps, null)(ResultImages)