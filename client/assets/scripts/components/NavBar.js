import React from 'react';
import { Link } from 'react-router';

var NavBar = React.createClass({

    render() {
        var menuItems = (guest) =>{
          if (!guest) {
              return (
                <ul className="menu-bar primary">
                  <li><Link to="login">Login</Link></li>
                </ul>
            )} else { return (
                <ul className="menu-bar primary">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Pricing Models</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
            )}}

        return (
            <div id="header" className="shrink collapse grid-content">
                { menuItems(this.props.guest) }
            </div>
        )
}})

module.exports = NavBar;
