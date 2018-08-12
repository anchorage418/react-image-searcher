import React, { Component } from 'react';

const setToStorage = (item) => {
  const localStorage = window.localStorage;
  localStorage.setItem('savedImages', JSON.stringify(item));
}
const getFromStorage = () => {
  const localStorage = window.localStorage;
  return JSON.parse(localStorage.getItem('savedImages'))
}
class SavedImages extends Component {

  handleDelete = (id) => {
    const { 
      deleteImageStart, 
      images, 
    } = this.props;

    if(images.length) {
      const imagesInStorage = getFromStorage();
      const filteredImg = [...imagesInStorage.filter((img) => {
        return img.id !== id;
      })];
      setToStorage(filteredImg);
      deleteImageStart(id);
    } 
  }

  render() {
    const {
      images, 
      saveImageStart
    } = this.props;
    const getStorage = getFromStorage(); 
    let savedImg;

    if(images.length && getStorage && getStorage.length > 0) {
      let totalImg = [...images, ...getStorage];
      totalImg.map((img) => {
        saveImageStart(img);
      });
      setToStorage(images);
      savedImg = getFromStorage();
    } else if(images.length && getStorage && getStorage.length === 0) {
      setToStorage(images);
      savedImg = getFromStorage();
    } else if(images.length === 0 && getStorage && getStorage.length > 0) {
      getStorage.map((img) => {
        saveImageStart(img);
      });
      savedImg = getFromStorage();
    } else if(images.length && !getStorage) {
      setToStorage(images);
      savedImg = getFromStorage();
    } else {
      savedImg = [];
    }

    return (
      <div>
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
                    className="delete-btn" 
                    onClick={() => this.handleDelete(value.id)}
                    >
                      x
                  </button>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default SavedImages;