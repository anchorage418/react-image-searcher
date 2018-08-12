import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
  
  render() {
    const { counter } = this.props;

    return(
      <div className="tab-container">
        <div className="tab">
          <NavLink 
            exact to="/" 
            className="tab_link"
            activeClassName="tab_link__active"
          >
            Search
          </NavLink>
        </div>
        <div className="tab">
          <div className="saved-img-tab">
            <NavLink exact to="/save"
              className="tab_link" 
              activeClassName="tab_link__active"
            >
              Saved images
            </NavLink>
            {
              counter !== 0 && 
              (<span>{counter}</span>)
            }
          </div>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  counter: PropTypes.number.isRequired,
};