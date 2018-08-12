import React, {Component} from 'react';

class ResultsLayoutForm extends Component {

  handleChange = (event) => {
    const { changeLayoutStart } = this.props;
    changeLayoutStart(event.target.value);
  }

  render() {
    const {
      option, 
      count, 
      children
    } = this.props;
    
    return(
      <div>
        <form>
          <input 
            type="radio" 
            id="one"
            name="column" 
            value="1" 
            checked={option === '1'} 
            onChange={this.handleChange}
          />
          <label htmlFor="one">One column</label>
          <input 
            type="radio"
            id="two"
            name="column"
            value="2"
            checked={option === '2'}
            onChange={this.handleChange}
          />
          <label htmlFor="two">Two columns</label>
          <input
            type="radio"
            id="three"
            name="column"
            value="3"
            checked={option === '3'}
            onChange={this.handleChange}
          />
          <label htmlFor="three">Three columns</label>
          <input
            type="radio"
            id="four"
            name="column" 
            value="4" 
            checked={option === '4'} 
            onChange={this.handleChange}
          />
          <label htmlFor="four">Four columns</label>
        </form>
        {React.cloneElement(children, {columnCount: count})}
      </div>
    )
  }
}

ResultsLayoutForm.defaultProps = {
  option: '',
  count: ''
}

export default ResultsLayoutForm;