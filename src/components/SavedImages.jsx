import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteImageStart
} from '../actions/index';

class SavedImages extends Component {

  handleDelete = (id) => {
    const { deleteImageStart } = this.props;
    deleteImageStart(id);
  }

  render() {
    const {images} = this.props;
    // const countVal = images.saved.count;
    const localStorage = window.localStorage;
    try {
      localStorage.setItem('savedImages', JSON.stringify(images.saved));
    } catch (error) {
      console.error(error);
    }
    const savedImg = localStorage.getItem('savedImages') ? JSON.parse(localStorage.getItem('savedImages')) : [];
    
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