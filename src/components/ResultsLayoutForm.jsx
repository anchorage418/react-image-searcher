import React, {Component} from 'react';
import ResultImages from './ResultImages';

class ResultsLayoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {count: '1'};
  }

  handleChange = (event) => {
    this.setState({count: event.target.value});
  }

  render() {
    const count = this.state.count;
    return(
      <div>
        <form>
          <input type="radio" id="one" name="column" value="1" defaultChecked="true" onChange={this.handleChange}/>
          <label htmlFor="one">One column</label>
          <input type="radio" id="two" name="column" value="2" onChange={this.handleChange}/>
          <label htmlFor="two">Two columns</label>
          <input type="radio" id="three" name="column" value="3" onChange={this.handleChange}/>
          <label htmlFor="three">Three columns</label>
          <input type="radio" id="four" name="column" value="4" onChange={this.handleChange}/>
          <label htmlFor="four">Four columns</label>
        </form>
        <ResultImages columnCount={count}/>
      </div>
    )
  }
}

export default ResultsLayoutForm