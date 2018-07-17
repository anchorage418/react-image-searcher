import React, {Component} from 'react';
import {connect} from 'react-redux';

class Image extends Component {

  handleClick = () => {

  }

  render() {
    const {imageObj} = this.props;
    return(
      <div className="img-container">
        <img src={imageObj.urls.regular} alt={imageObj.description} className="img-container_image"/>
        <div className="img-container_image-overlay">
          <button className="img-container_image-overlay-btn" onClick={this.handleClick}>save</button>
        </div>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(Image)