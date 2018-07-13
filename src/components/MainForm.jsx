import React, {Component} from 'react';

export default class MainForm extends Component {
  render() {
    return(
      <div>
        <form>
          <label for="subject">Subject: </label>
          <input type="text" id="subject" name="subject"/>
          <label for="columns">Columns: </label>
          <select type="text" id="columns" name="columns">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>
    );
  }
}