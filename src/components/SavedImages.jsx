import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   deleteImageStart
// } from '../actions/index';

class SavedImages extends Component {

  handleDelete = (id) => {
    // debugger
    const { deleteImageStart, saveImageStart, images } = this.props;
    if(images.length) {
      console.log('deleteImageStart');
      const imagesInStorage = JSON.parse(localStorage.getItem('savedImages'));
      console.log('imagesInStorage', imagesInStorage);
      const filteredImg = [...imagesInStorage.filter((img) => {
        return img.id !== id;
      })];
      localStorage.setItem('savedImages', JSON.stringify(filteredImg));
      deleteImageStart(id);
    } 
    // else {
    //   const imagesInStorage = JSON.parse(localStorage.getItem('savedImages'));
    //   console.log('imagesInStorage', imagesInStorage);
    //   const filteredImg = [...imagesInStorage.filter((img) => {
    //     return img.id !== id;
    //   })];
    //   console.log('filteredImg', filteredImg);
    //   // localStorage.setItem('savedImages', JSON.stringify(filteredImg));

    //   filteredImg.map((img) => {
    //     saveImageStart(img);
    //   })
    // }
  }
  
  // componentWillReceiveProps(nextProps) {

  // }

  render() {
    // debugger
    const {images, saveImageStart} = this.props;
    console.log('images', images);
    // const countVal = images.saved.count;
    const localStorage = window.localStorage;
    const getStorage = localStorage.getItem('savedImages'); 
    const setToStorage = (images) => {
      localStorage.setItem('savedImages', JSON.stringify(images))
    }; 
    let savedImg;

    if(images.length && getStorage && JSON.parse(getStorage).length > 0) {
      // debugger
      console.log('first true');
      let totalImg = [...images, ...JSON.parse(getStorage)];
      console.log(totalImg);
      totalImg.map((img) => {
        saveImageStart(img);
      });
      setToStorage(images);
      savedImg = JSON.parse(localStorage.getItem('savedImages'));
    } else if(images.length && getStorage && JSON.parse(getStorage).length === 0) {
      console.log('second true');
      setToStorage(images);
      savedImg = JSON.parse(localStorage.getItem('savedImages'));
      // setToStorage;
    } else if(images.length === 0 && getStorage && JSON.parse(getStorage).length > 0) {
      // debugger
      console.log('third true');
      JSON.parse(getStorage).map((img) => {
        saveImageStart(img);
      });
      savedImg = JSON.parse(localStorage.getItem('savedImages'));
    } else if(images.length && !getStorage) {
      console.log('fourth true');
      setToStorage(images);
      savedImg = JSON.parse(localStorage.getItem('savedImages'));
    } else {
      console.log('else');
      savedImg = [];
    }

    // try {
    //   if( getStorage && JSON.parse(getStorage).length === 0 ) {
    //     console.log('first true', !JSON.parse(getStorage).length);
    //     console.log('first true', typeof JSON.parse(getStorage).length);
    //     localStorage.setItem('savedImages', JSON.stringify(images));
    //   } else if (!getStorage) {
    //     console.log('second true');
    //     localStorage.setItem('savedImages', JSON.stringify(images));
    //   } 
    //   else if (getStorage && images.length > 0) {
    //     console.log('third true', getStorage && images.length > 0);
    //     localStorage.setItem('savedImages', JSON.stringify(images));
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    // const savedImg = localStorage.getItem('savedImages') ? JSON.parse(localStorage.getItem('savedImages')) : [];
    // const savedImg = JSON.parse(localStorage.getItem('savedImages'));
    console.log('savedImg', savedImg);
    // console.log('getItem', Boolean(JSON.parse(localStorage.getItem('savedImages'))));
    // return(
    //   <div>HEllo</div>
    // )
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