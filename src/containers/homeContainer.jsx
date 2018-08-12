import React, {Component} from 'react';

import SearchFormContainer from './searchFormContainer';
import SearchResultContainer from './searchResultContainer';

class Home extends Component {
  render() {
    return(
      <div>
        <SearchFormContainer />
        <SearchResultContainer />
      </div>
    );
  }
}

export default Home;