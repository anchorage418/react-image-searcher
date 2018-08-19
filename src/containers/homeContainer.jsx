import React, {Component, Fragment} from 'react';

import SearchFormContainer from './searchFormContainer';
import SearchResultContainer from './searchResultContainer';

class Home extends Component {
  render() {
    return(
      <Fragment>
        <SearchFormContainer />
        <SearchResultContainer />
      </Fragment>
    );
  }
}

export default Home;