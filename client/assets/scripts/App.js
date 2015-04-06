var React = require('react');
var { RouteHandler, Link } = require('react-router');
var { PropTypes } = React;
import SideBar from './components/SideBar';

var Menu = React.createClass({
    render: function() {
        return (
            <div id="header" className="shrink collapse grid-content">
              <ul className="menu-bar primary">
                <li className="hide-for-medium"><a zf-open="sidebar" href="#">Menu</a></li>
                <li><Link to='login'>Login</Link></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Pricing Models</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
        )
    }
})
var App = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },

    render: function() {
        return (
           <div className="grid-frame">
              <SideBar/>

              <div className="grid-block collapse medium-9 large-9 vertical">
                <Menu/>
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
