import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeLayoutStart} from '../actions/index';

import ResultsLayoutForm from '../components/ResultsLayoutForm';
import ResultImagesLayout from './resultImagesContainer';

class SearchResult extends Component {
  render() {
    const {
      option,
      count,
      changeLayoutStart,
    } = this.props;

    return(
      <div>
        <ResultsLayoutForm
          option = {option}
          count = {count}
          changeLayoutStart={changeLayoutStart}
        >
          <ResultImagesLayout />
        </ResultsLayoutForm>
      </div>
    );
  }
}

SearchResult.propTypes = {
  option: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  changeLayoutStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeLayoutStart
};

const mapStateToProps = (state) => {
  const { resultLayout } = state;
  const {
    option,
    count,
  } = resultLayout;

  return {
    option,
    count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);