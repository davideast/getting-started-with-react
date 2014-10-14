/** @jsx React.DOM */
var React = require('react'),
    Feed = require('./components/Feed');

React.renderComponent(
  <Feed />,
  document.getElementById('app')
);