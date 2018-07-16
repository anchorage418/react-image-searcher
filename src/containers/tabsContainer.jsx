import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Tabs extends Component {
  render() {
    return(
      <div className="tab-container">
        <div className="tab">
          <NavLink exact to="/" className="tab_link" activeClassName="tab_link__active">Search</NavLink>
        </div>
        <div className="tab">
          <NavLink exact to="/save" className="tab_link" activeClassName="tab_link__active">Saved images</NavLink>
        </div>
      </div>
    )
  }
}