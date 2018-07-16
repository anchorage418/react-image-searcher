import React, {Component} from 'react';

class Image extends Component {
  render() {
    const {imageObj, key} = this.props;
    return(
      <div className="img-container" key={key}>
        <img src={imageObj.urls.regular} alt={imageObj.description} className="img-container_image"/>
        <div className="img-container_image-overlay">
          <button className="img-container_image-overlay-btn">add</button>
        </div>
      </div>
    )
  }
}

export default Image