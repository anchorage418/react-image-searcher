import React, {Component} from 'react';
import MainForm from './mainFormContainer';
import ResultImages from './resultImagesContainer';

export default class Layout extends Component {
  render() {
    return(
      <div>
        <MainForm />
        <ResultImages />
      </div>
    );
  }
}