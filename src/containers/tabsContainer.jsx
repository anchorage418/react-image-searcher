import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class tabsContainer extends Component {
  render() {
    return(
      <div>
        <Link to="/">Search</Link>
        <Link to="/save">Savings</Link>
      </div>
    )
  }
}