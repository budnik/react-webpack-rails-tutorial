var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// var router = Router.create({
//     location : Router.HistoryLocation,
//     routes : routes
// });

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state} />, document.getElementById('content'));
});

