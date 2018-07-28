import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveImageStart} from '../actions/index';

class Image extends Component {

  handleClick = (image) => {
    this.props.saveImageStart(image);
  }

  render() {
    const {imageObj} = this.props;
    const styles = {
      backgroundImage: `url(${imageObj.urls.regular})` 
    }

    return(
      <div className="img-container">
        <div style={{position: 'relative', height: '100%', width: '100%'}}>
          <div style={styles} className="img-container_image"/>
          <div className="img-container_image-overlay">
            {/* <div className="img-container_image-overlay-btn" onClick={ () => this.handleClick(imageObj) }>save</div> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  saveImageStart
}

export default connect(null, mapDispatchToProps)(Image)