import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchImagesStart} from '../actions/index';

import Search from '../components/Search';

class SearchForm extends Component {
  render() {
  const { fetchImagesStart } = this.props;

    return(
      <div>
        <Search 
          fetchImagesStart={fetchImagesStart}
        />
      </div>
    );
  }
}

SearchForm.propTypes = {
  fetchImagesStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchImagesStart
};

export default connect(null, mapDispatchToProps)(SearchForm);