import React, {Component} from 'react';

class ShowMoreBtn extends Component {

  handleClick = () => {
    const { 
      query: {value, page},
      showMoreImagesStart,
    } = this.props;
    showMoreImagesStart({
      value: value, 
      page: page + 1
    });
  }

  render() {
    return(
      <div>
        <button 
          className="showe-more-btn" 
          onClick={this.handleClick}
        >
          Show more
        </button>
      </div>
    )
  }
}

export default ShowMoreBtn;