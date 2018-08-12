import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      page: 1
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    const { fetchImagesStart } = this.props;
    event.preventDefault();
    fetchImagesStart(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="subject">Subject: </label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;