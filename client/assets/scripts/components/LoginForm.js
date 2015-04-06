'use strict';

var React = require('react');
var SessionActions = require('../actions/SessionActions');
var SessionStore = require('../stores/SessionStore');
var ErrorNotice = React.createClass({
  render() {
    return (
      <h4 style={{'background-color': 'red'}, {color: 'red'}}> {this.props.errors[0]} </h4>
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
      this.setState({ errors: [errorMsg] });
    }
  },

  _onSubmit(e) {
    this.setState({ errors: [], isLoading: true });
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    SessionActions.login(email, password);
  },

  render() {
    var klass =  "grid-block " + (this.state.errors.length ? "shake" : "")
    console.log(klass)
    return (
      <div className={klass} style={{"margin-top": 10}}>
        <div className="card grid-container card--login small-10 medium-6 large-4 columns small-centered">
          <h3>Please login</h3>
          <hl/>
          <form onSubmit={this._onSubmit}>
            <div className="card--login__field">
              <label name="email">Email</label>
              <input type="text" name="email" ref="email" />
            </div>
            <div className="card--login__field">
              <label name="password">Password</label>
              <input type="password" name="password" ref="password" />
            </div>
            <ErrorNotice errors={this.state.errors} />
            <button type="submit grid-container" className="button button-large card--login__submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;
