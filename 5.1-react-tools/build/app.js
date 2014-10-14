/** @jsx React.DOM */


var MessageBox = React.createClass({displayName: 'MessageBox',

  deleteMessage: function(message) {
    var newMessages = _.without(this.state.messages, message);
    this.setState({
      messages: newMessages
    });
  },

  handleAdd: function(e) {
    var newMessage = this.refs.newMessage.getDOMNode().value;
    var newMessages = this.state.messages.concat([newMessage]);
    this.setState({
      messages: newMessages
    });
  },

  getInitialState: function() {
    return {
      isVisible: true,
      messages: [
                  'I like the world',
                  'Coffee flavored ice cream is highly underrated',
                  'My spoon is too big',
                  'Tuesday is coming. Did you bring your coat?',
                  'I am a banana',
                ]
    }
  },

  render: function() {

    var inlineStyles = {
      display: this.state.isVisible ? 'block' : 'none'
    };

    var messages = this.state.messages.map(function(message) {
      return SubMessage({message: message, onDelete: this.deleteMessage});
    }.bind(this));

    return (
      React.DOM.div({className: "container jumbotron", style: inlineStyles}, 
        React.DOM.h2(null, "Hello, World"), 
        React.DOM.input({ref: "newMessage", type: "text"}), 
        React.DOM.button({className: "btn btn-primary", onClick: this.handleAdd}, "Add"), 
        messages 
      )
    );
  }
});


var SubMessage = React.createClass({displayName: 'SubMessage',

  handleDelete: function (e) {
    this.props.onDelete(this.props.message);
  },

  propTypes: {
    message: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      message: 'Its good to see you'
    }
  },

  render: function() {
    return (
      React.DOM.div(null, 
        this.props.message, 
        React.DOM.button({onClick: this.handleDelete, className: "btn btn-danger"}, "x")
      )
    );
  }
});

var reactComponent = React.renderComponent(
  MessageBox(null),
  document.getElementById('app')
);