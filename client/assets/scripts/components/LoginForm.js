'use strict';

var React = require('react');
var SessionActions = require('../actions/SessionActions');
var SessionStore = require('../stores/SessionStore');

var ErrorNotice = React.createClass({
  render() {
    return (
      <h1 style={{color: 'red'}}> {this.props.errors[0]} </h1>
    );
  }
});

var LoginForm = React.createClass({
  getInitialState() {
    return SessionStore.getState();
  },

  componentWillMount() {
    SessionStore.listen(this._onChange);
  },

  componentWillUnmount() {
    SessionStore.unlisten(this._onChange);
  },

  _onChange() {

    var errorMsg = SessionStore.getState().errors.message;
    if (errorMsg) {
      console.log(`%c${errorMsg}`, 'color: red; font-size: x-small');
      this.setState({ isLoading: false, errors: [errorMsg] });
    }
  },

  _onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: [], isLoading: true });
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    SessionActions.login(email, password);
  },

  render() {
    return (
      <div>
        <ErrorNotice errors={this.state.errors} />
        <div className="row">
          <div className="card card--login small-10 medium-6 large-4 columns small-centered">
            <form onSubmit={this._onSubmit}>
              <div className="card--login__field">
                <label name="email">Email</label>
                <input type="text" name="email" ref="email" />
              </div>
              <div className="card--login__field">
                <label name="password">Password</label>
                <input type="password" name="password" ref="password" />
              </div>
              <button type="submit" className="card--login__submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;
