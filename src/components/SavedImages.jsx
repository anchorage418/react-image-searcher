import React, { Component, Fragment } from 'react';
import Icon from '@mdi/react';
import { 
  mdiTrashCanOutline,
} from '@mdi/js';
import { getFromStorage } from '../utils/index';

class SavedImages extends Component {

  handleDelete = (id) => {
    const { deleteImageStart } = this.props;
      deleteImageStart(id);
  }

  render() {
    const {
      images, 
    } = this.props;
    const getStorage = getFromStorage(); 
    let savedImg;

    if (images.length) {
      savedImg = images;
    } else if (!images.length && getStorage && getStorage.length) {
      savedImg = getStorage;
    } else {
      savedImg = [];
    }

    return (
      <Fragment>
        <div>
          <div className="saved-img-general-container">
          {
            savedImg.map((value, index) => {
              return(
                <div 
                  key={index} 
                  className="saved-img-container"
                >
                  <img 
                    src={value.urls.regular} 
                    alt={value.description} 
                    className="saved-img"
                  />
                  <button 
                    className="button delete-btn" 
                    onClick={() => this.handleDelete(value.id)}
                    >
                    <Icon 
                      path={ mdiTrashCanOutline }
                      size={2.3}
                      color="#940a5a"
                    />
                  </button>
                </div>
              )
            })
          }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SavedImages;