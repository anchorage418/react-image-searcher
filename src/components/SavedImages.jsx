import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   deleteImageStart
// } from '../actions/index';

class SavedImages extends Component {

  handleDelete = (id) => {
    const { deleteImageStart, saveImageStart, images } = this.props;
    if(images.length) {
      console.log('deleteImageStart');
      deleteImageStart(id);
    } else {
      const imagesInStorage = JSON.parse(localStorage.getItem('savedImages'));
      console.log('imagesInStorage', imagesInStorage);
      const filteredImg = [...imagesInStorage.filter((img) => {
        return img.id !== id;
      })];
      console.log('filteredImg', filteredImg);
      // localStorage.setItem('savedImages', JSON.stringify(filteredImg));

      filteredImg.map((img) => {
        saveImageStart(img);
      })
    }
  }

  render() {
    const {images} = this.props;
    console.log('images', images);
    // const countVal = images.saved.count;
    const localStorage = window.localStorage;
    const getStorage = localStorage.getItem('savedImages'); 
    try {
      if( getStorage && JSON.parse(getStorage).length === 0 ) {
        console.log('first true', !JSON.parse(getStorage).length);
        console.log('first true', typeof JSON.parse(getStorage).length);
        localStorage.setItem('savedImages', JSON.stringify(images));
      } else if (!getStorage) {
        console.log('second true');
        localStorage.setItem('savedImages', JSON.stringify(images));
      } 
      else if (getStorage && images.length > 0) {
        console.log('third true', getStorage && images.length > 0);
        localStorage.setItem('savedImages', JSON.stringify(images));
      }
    } catch (error) {
      console.error(error);
    }
    const savedImg = localStorage.getItem('savedImages') ? JSON.parse(localStorage.getItem('savedImages')) : [];
    // const savedImg = JSON.parse(localStorage.getItem('savedImages'));
    console.log('savedImg', savedImg);
    // console.log('getItem', Boolean(JSON.parse(localStorage.getItem('savedImages'))));
    return (
      <div>
        <div>
          <div className="saved-img-general-container">
          {
            savedImg.map((value, index) => {
              return(
                <div key={index} className="saved-img-container">
                  <img src={value.urls.regular} alt={value.description} className="saved-img"/>
                  <button className="delete-btn" onClick={() => this.handleDelete(value.id)}>x</button>
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

// const mapStateToProps = (state) => {
//   // console.log('state.savedImages state', state);
//   return {
//     images: state.savedImages
//   }
// }

// const mapDispatchToProps = {
//   deleteImageStart
// }

export default SavedImages;