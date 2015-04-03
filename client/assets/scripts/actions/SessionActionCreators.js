'use strict';

// var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
// var SmallConstants = require('../constants/Constants.js');
var BillingAPI = require('../api/BillingAPI.js');

// var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  // signup: function(email, password, passwordConfirmation) {
  //   SmallAppDispatcher.handleViewAction({
  //     type: ActionTypes.SIGNUP_REQUEST,
  //     email: email,
  //     password: password,
  //     passwordConfirmation: passwordConfirmation
  //   });
  //   BillingAPI.signup(email, password, passwordConfirmation);
  // },

  login: function(email, password) {
    // SmallAppDispatcher.handleViewAction({
    //   type: ActionTypes.LOGIN_REQUEST,
    //   email: email,
    //   password: password
    // });
    BillingAPI.login(email, password);
  }
  //,

  // logout: function() {
  //   SmallAppDispatcher.handleViewAction({
  //     type: ActionTypes.LOGOUT
  //   });
  // }

};
