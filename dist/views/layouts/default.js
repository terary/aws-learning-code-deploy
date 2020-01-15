"use strict";

var React = require('react');

function DefaultLayout(props) {
  return React.createElement("html", null, React.createElement("head", null, React.createElement("title", null, props.title)), React.createElement("body", null, "Children of this Component:", React.createElement("hr", null), props.children, React.createElement("hr", null)));
}

module.exports = DefaultLayout;