import React, {Component} from 'react';
import MainForm from './mainFormContainer';
import ResultImages from './resultImagesContainer';
import ResultsLayoutForm from '../components/ResultsLayoutForm';

export default class Layout extends Component {
  render() {
    return(
      <div>
        <MainForm />
        <ResultsLayoutForm>
          <ResultImages />
        </ ResultsLayoutForm>
      </div>
    );
  }
}