import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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
// todo: delet mapStateToProps
// const mapStateToProps = (state) => {
//   return {
//     countVal: state.savedImages.count
//   }
// }

// export default connect(mapStateToProps, null)(Home)
export default Home;