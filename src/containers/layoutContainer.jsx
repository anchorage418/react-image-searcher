import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainForm from './mainFormContainer';
import ResultsLayoutForm from '../components/ResultsLayoutForm';
import TabsContainer from './tabsContainer';

class Layout extends Component {
  render() {
    const {countVal} = this.props;

    return(
      <div>
        <TabsContainer counter={countVal}/>
        <MainForm />
        <ResultsLayoutForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countVal: state.savedImages.count
  }
}

export default connect(mapStateToProps, null)(Layout)