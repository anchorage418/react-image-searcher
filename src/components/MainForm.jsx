import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchImagesStart} from '../actions/index';

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchImagesStart(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="subject">Subject: </label>
          <input type="text" id="subject" name="subject" onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchImagesStart
}

export default connect(null, mapDispatchToProps)(MainForm);