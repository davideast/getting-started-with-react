/** @jsx React.DOM */

var React = require('react'),
    MessageBox = require('./MessageBox');

React.renderComponent(
  <MessageBox />,
  document.getElementById('app')
);