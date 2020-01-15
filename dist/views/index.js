"use strict";

var React = require('react');

var DefaultLayout = require('./layouts/default');

function HelloMessage(props) {
  return React.createElement(DefaultLayout, {
    title: props.title
  }, React.createElement("div", null, "Hello ", props.name));
}

module.exports = HelloMessage;