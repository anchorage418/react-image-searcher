import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showMoreImagesStart} from '../actions/index';

class ShowMoreBtn extends Component {

  handleClick = () => {
    // debugger
    const {value, page} = this.props.query;
    // console.log('!!!', page);
    this.props.showMoreImagesStart({value: value, page: page + 1});
  }

  render() {
    return(
      <div>
        <button className="showe-more-btn" onClick={this.handleClick}>Show more</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  showMoreImagesStart
}

const mapStateToProps = (state) => {
  return {
    query: state.resultImages.query
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreBtn)