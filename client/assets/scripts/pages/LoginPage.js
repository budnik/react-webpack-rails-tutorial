'use strict';

var React = require('react');
var SessionStore = require('../stores/SessionStore');
var LoginForm = require('../components/LoginForm');
var { Link } = require('react-router');

var LoginPage = React.createClass({
  getInitialState() {
    return ({loggedIn: this._loggedIn()});
  },

  componentWillMount() {
    SessionStore.listen(this._onChange);
  },

  componentWillUnmount() {
    SessionStore.unlisten(this._onChange);
  },

  _onChange() {
    this.setState({ loggedIn: this._loggedIn() });
  },

  _loggedIn(){
    return !!(SessionStore.getState().session || {}).access_token;
  },

  render() {
    if (this.state.loggedIn) {
      return ( <span>You are logged in, <Link to='home'>proceed</Link></span> );
    } else {
      return ( <LoginForm />);
    }
  }
});

module.exports = LoginPage;
