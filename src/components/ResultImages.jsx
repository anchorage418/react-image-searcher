import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShowMoreBtn from './ShowMoreBtn';
import Image from './Image';

class ResultImages extends Component {
  render() {
    const {
      images,
      query,
      columnCount,
      saveImageStart,
      showMoreImagesStart,
    } = this.props;
    // const iamgesArray = Object.keys(images).map((key)=>{
    //   return images[key];
    // });
console.log('images', images);
    if(images && !images.length) {
      // console.log('first if', images && !images.length);
      return(
        <div>Ready to search</div>
      )
    } else {
      // console.log('second if');
      return(
        <div className="column-container">
          <div className={`column-count-${columnCount}`}>
            {
              images.map( (image, index) => {
                return(
                  <Image imageObj={image} key={index} saveImageStart={saveImageStart}/>
                );
              } )
            }
          </div>
          <ShowMoreBtn
            query={query}
            showMoreImagesStart={showMoreImagesStart}
          />
        </div>
      );
    }

  }
}
// todo: remove connect and else
// const mapStateToProps = (state) => {
//   // console.log('state.resultImages', state.resultImages);
//   return {
//     images: state.resultImages
//   }
// }

// export default connect(mapStateToProps, null)(ResultImages)
export default ResultImages;
