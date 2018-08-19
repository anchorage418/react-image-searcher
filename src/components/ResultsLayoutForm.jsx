import React, {Component} from 'react';
import Icon from '@mdi/react';
import { 
  mdiNumeric1BoxMultipleOutline,
  mdiNumeric2BoxMultipleOutline,
  mdiNumeric3BoxMultipleOutline,
  mdiNumeric4BoxMultipleOutline,
} from '@mdi/js';

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
      <div className="result-layout result-layout__container">
        <form className="layout-form">
          <span className="layout-form__title">
            Choose columns views:
          </span>
          <div className="layout-form__inner-wrapper">
            <div className="layout-form__input-container">
              <Icon 
                path={ mdiNumeric1BoxMultipleOutline }
                size={2}
                color="#fff"
              />
              <input 
                type="radio" 
                id="one"
                name="column" 
                value="1" 
                checked={option === '1'} 
                onChange={this.handleChange}
                className="layout-form__input"
              />
              <label 
                htmlFor="one"
                className="layout-form__label"
              ></label>
            </div>
            <div className="layout-form__input-container">
              <Icon 
                path={ mdiNumeric2BoxMultipleOutline }
                size={2}
                color="#fff"
              />
              <input 
                type="radio"
                id="two"
                name="column"
                value="2"
                checked={option === '2'}
                onChange={this.handleChange}
                className="layout-form__input"
              />
              <label 
                htmlFor="two"
                className="layout-form__label"
              ></label>
            </div>
            <div className="layout-form__input-container">
              <Icon 
                path={ mdiNumeric3BoxMultipleOutline }
                size={2}
                color="#fff"
              />
              <input
                type="radio"
                id="three"
                name="column"
                value="3"
                checked={option === '3'}
                onChange={this.handleChange}
                className="layout-form__input"
              />
              <label 
                htmlFor="three"
                className="layout-form__label"
              ></label>
            </div>
            <div className="layout-form__input-container">
              <Icon 
                path={ mdiNumeric4BoxMultipleOutline }
                size={2}
                color="#fff"
              />
              <input
                type="radio"
                id="four"
                name="column" 
                value="4" 
                checked={option === '4'} 
                onChange={this.handleChange}
                className="layout-form__input"
              />
              <label 
                htmlFor="four"
                className="layout-form__label"
              ></label>
            </div>
          </div>
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