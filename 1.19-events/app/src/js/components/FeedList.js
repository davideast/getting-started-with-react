/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem key={item.key}
                       title={item.title}
                       desc={item.description}
                       voteCount={item.voteCount}
                       onVote={this.props.onVote} />
    }.bind(this));

    return (
      <div className="container">
        <ul className="list-group">
          {feedItems}
        </ul>
      </div>
    );
  }

});

module.exports = FeedList;
