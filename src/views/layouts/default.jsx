var React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head><title>{props.title}</title></head>
      <body>Children of this Component:<hr />{props.children}<hr /></body>
    </html>
  );
}


module.exports = DefaultLayout;