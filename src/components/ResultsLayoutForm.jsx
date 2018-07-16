import React, {Component} from 'react';

class ResultsLayoutForm extends Component {
  render() {
    return(
      <div>
        <form action="">
          <input type="radio" id="one" name="column" defaultChecked="true"/>
          <label htmlFor="one">One column</label>
          <input type="radio" id="two" name="column"/>
          <label htmlFor="two">Two columns</label>
          <input type="radio" id="three" name="column"/>
          <label htmlFor="three">Three columns</label>
          <input type="radio" id="four" name="column"/>
          <label htmlFor="four">Four columns</label>
        </form>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ResultsLayoutForm