'use strict';
var alt = require('../alt');
var request = require('superagent');

// var BillingAPI = require('../api/BillingAPI.js');

// var ActionTypes = SmallConstants.ActionTypes;
class SessionActions {

  // signup: function(email, password, passwordConfirmation) {
  //   SmallAppDispatcher.handleViewAction({
  //     type: ActionTypes.SIGNUP_REQUEST,
  //     email: email,
  //     password: password,
  //     passwordConfirmation: passwordConfirmation
  //   });
  //   BillingAPI.signup(email, password, passwordConfirmation);
  // },

  login(email, password) {
    request.post('http://localhost:4000/v1/login')
      .send({ username: email, password: password, grant_type: 'password' })
      .set('Accept', 'application/json')//.end();
      .end( (err, resp) => {
          this.dispatch({err: err, response: resp});
      });
  }
  // //,

  // receiveLogin(json) { console.log(json)}

  // receiveLoginError(err) { console.log(err)}
  // // logout: function() {
  // //   SmallAppDispatcher.handleViewAction({
  // //     type: ActionTypes.LOGOUT
  // //   });
  // // }
}

module.exports = alt.createActions(SessionActions);
