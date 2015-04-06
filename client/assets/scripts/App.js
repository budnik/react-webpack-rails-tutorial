'use strict';
import React from 'react';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { RouteHandler } from 'react-router';
import ListenerMixin from 'alt/mixins/ListenerMixin';
import SessionStore from './stores/SessionStore';

var { PropTypes } = React;

var App = React.createClass({
    mixins: [ListenerMixin],
    getInitialState() {
      return ({loggedIn: this._loggedIn()});
    },

    componentWillMount() {
      SessionStore.listen(this._onChange);
    },

    _onChange() {
    this.setState({ loggedIn: this._loggedIn() });
    },

    _loggedIn(){
      return !!(SessionStore.getState().session || {}).access_token;
    },

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },

    render: function() {
        return (
           <div className="grid-frame">
              <SideBar/>

              <div className="grid-block collapse medium-9 large-9 vertical">
                <NavBar guest={this.state.loggedIn}/>
                <div className="grid-block">
                  <div className="grid-block small-12 medium-12 vertical">
                    <div className="grid-content">
                        <RouteHandler {...this.props} />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        );
    }
});

module.exports = App;
