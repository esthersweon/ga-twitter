import React, { Component } from 'react';

class Tweet extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tweet">
        <h1>{ this.props.text }</h1>
        <p>- { this.props.author }</p>
      </div>
    );
  }
}

export default Tweet;
