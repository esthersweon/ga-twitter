import React, { Component } from 'react';

class TweetForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // alert(`TEXT: ${this.refs.text.value} AUTHOR: ${this.refs.author.value}`);
    this.props.onTweetSubmit(this.refs.author.value, this.refs.text.value);

    // BONUS: Clearing form input fields after submit
    this.refs.author.value = '';
    this.refs.text.value = '';
  }

  render() {
    return (
      <form className="tweet-form" onSubmit={ this.handleSubmit }>
        <input ref="text" className="form-control" type="text" placeholder="Text"/>
        <input ref="author" className="form-control" type="text" placeholder="Author"/>
        <input type="submit" className="btn btn-primary"/>
      </form>
    );
  }
}

export default TweetForm;
