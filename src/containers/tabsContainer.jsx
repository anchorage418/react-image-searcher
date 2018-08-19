import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
  
  render() {
    const { counter } = this.props;

    return(
      <div className="tabs">
        <div className="tabs__container">
          <div className="tab">
            <NavLink 
              exact to="/" 
              className="tab__link"
              activeClassName="tab__link_active"
            >
              Search
            </NavLink>
          </div>
          <div className="tab">
            <NavLink exact to="/save"
              className="tab__link" 
              activeClassName="tab__link_active"
            >
              Saved images
            {
              counter !== 0 && 
              (<span className="counter">
                {counter}
              </span>)
            }
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  counter: PropTypes.number.isRequired,
};