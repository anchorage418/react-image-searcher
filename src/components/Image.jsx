import React, {Component} from 'react';

class Image extends Component {

  handleClick = (image) => {
    const { saveImageStart } = this.props;
    saveImageStart(image);
  }

  render() {
    const { imageObj } = this.props;
    const styles = {
      backgroundImage: `url(${imageObj && imageObj.urls && imageObj.urls.regular})` 
    }

    return(
      <div className="img-container">
        <div style={{
          position: 'relative', 
          height: '100%', 
          width: '100%'
        }}>
          <div 
            style={styles} 
            className="img-container_image"
          />
          <div className="img-container_image-overlay">
            <button 
              className="img-container_image-overlay-btn" 
              onClick={ () => this.handleClick(imageObj) }
            >
              save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Image;