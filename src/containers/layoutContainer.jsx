import React, {Component} from 'react';
import MainForm from './mainFormContainer';
import ResultsLayoutForm from '../components/ResultsLayoutForm';
import Tabs from './tabsContainer';

export default class Layout extends Component {
  render() {
    return(
      <div>
        <Tabs />
        <MainForm />
        <ResultsLayoutForm />
      </div>
    );
  }
}