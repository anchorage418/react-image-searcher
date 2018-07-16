import React, {Component} from 'react';
import {connect} from 'react-redux';

class ResultImages extends Component {
  render() {
    const {images} = this.props;
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
          <div className="column-count-two">
            {
              iamgesArray.map( (image, index) => {
                return(
                  <div key={index} className="img-container">
                    <img src={image.urls.regular} alt={image.description} className="img-container_image"/>
                  </div>
                )
              } )
            }
          </div>
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