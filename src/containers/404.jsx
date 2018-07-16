import React, {Component} from 'react';

export default class NotFound extends Component {
  render() {
    return(
      <div className="error-404-container">
        <div className="error-404-container_message">
          Sorry, there is no such page :(
        </div>
      </div>
    );
  }
}