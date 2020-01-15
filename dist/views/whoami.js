"use strict";

var React = require('react');

var SystemInfoLayout = require('./layouts/systeminfo');

const ListItem = props => {
  return React.createElement("div", {
    key: props.k
  }, props.k, " = ", props.v);
};

const Dictionary = props => {
  return React.createElement("div", {
    style: {
      border: '1px solid black',
      'backgroundColor': 'lightgrey',
      padding: '3px'
    }
  }, React.createElement("h4", null, props.title), Object.keys(props.dictionary).map(key => {
    return ListItem({
      k: key,
      v: props.dictionary[key]
    });
  }));
};

function WhoAmI(props) {
  const vars = process.env;
  const nodeVars = {};
  const nodeVarsOrdered = {}; //const x = Object.entries(vars); 

  Object.entries(vars).forEach(([key, value]) => {
    if (key.match(/node|npm/i)) {
      nodeVars[key] = value;
    }
  });
  Object.keys(nodeVars).sort().forEach(function (key) {
    nodeVarsOrdered[key] = nodeVars[key];
  });
  const x = 3;
  return React.createElement(SystemInfoLayout, {
    title: props.title
  }, React.createElement("h3", null, "This should be in a 'protected' route"), React.createElement("div", null, "Hello ", props.name), React.createElement("div", null, React.createElement(Dictionary, {
    title: "node/npm environment variables",
    dictionary: nodeVarsOrdered
  }), React.createElement(Dictionary, {
    title: "process env",
    dictionary: process.env
  })));
}

module.exports = WhoAmI;