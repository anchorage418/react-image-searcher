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
      <div className="search-form search-form__container">
        <form 
          onSubmit={this.handleSubmit}
        >
          {/* <label htmlFor="subject">Subject: </label> */}
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Enter keyword here..."
            onChange={this.handleChange}
            className="search-form__input"
          />
          <button 
            type="submit"
            className="button search-form__btn"
          >
            Start searching
          </button>
        </form>
      </div>
    );
  }
}

export default Search;