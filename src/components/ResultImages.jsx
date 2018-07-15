import React, {Component} from 'react';
import {connect} from 'react-redux';

class ResultImages extends Component {
  render() {
    const {images} = this.props;
    const iamgesArray = Object.keys(images).map((key)=>{
      return images[key];
    });
    console.log(iamgesArray); 
    if(Object.keys(images).length === 0) {
      return(
        <div>Ready to search</div>
      )
    } else {
      return(
        <div>
          {
            iamgesArray.map( (image, index) => {
              return(
                <img src={image.urls.regular} key={index} alt=""/>
              )
            } )
          }
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    images: state.resultImages
  }
}

export default connect(mapStateToProps, null)(ResultImages)