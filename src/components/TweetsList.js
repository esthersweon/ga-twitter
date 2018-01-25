import React, { Component } from 'react';
import Tweet from './Tweet';

class TweetsList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tweets-list">
        { this.props.potato.map(function(eachTweet) {
        	return <Tweet author={ eachTweet.author } text={ eachTweet.text } />
        }) }
      </div>
    );
  }
}

// eachTweet = {author: 'some author', text: 'some text'}

export default TweetsList;
