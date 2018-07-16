import React, {Component} from 'react';
import MainForm from './mainFormContainer';
import ResultsLayoutForm from '../components/ResultsLayoutForm';
import tabsContainer from './tabsContainer';

export default class Layout extends Component {
  render() {
    return(
      <div>
        <tabsContainer />
        <MainForm />
        <ResultsLayoutForm />
      </div>
    );
  }
}