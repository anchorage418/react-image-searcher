import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveImageStart} from '../actions/index';

class Image extends Component {

  handleClick = (image) => {
    // console.log('CLICK', image);
    this.props.saveImageStart(image);
  }

  render() {
    const {imageObj, id, index} = this.props;
    return(
      <div className="img-container">
        <img src={imageObj.urls.regular} alt={imageObj.description} className="img-container_image"/>
        <div className="img-container_image-overlay">
          <button className="img-container_image-overlay-btn" onClick={ () => this.handleClick(imageObj) }>save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  saveImageStart
}

export default connect(null, mapDispatchToProps)(Image)