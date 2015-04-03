// The entry point to our client-side app (used by both Rails and Webpack HMR).
// Essentially renders the top-level view-controller CommentBox component.

var React = require('react/addons');
var router = require('react-router');

var $ = require('jquery');
import { CommentBox } from './components/CommentBox';
var CommentBox2 = React.createClass({
  render: function () {
    return (
      <div className="grid-block shrink">Hello {this.props.name}!</div>
    );
  }
});

var render = () => {
  if ($("#content").length > 0) {
    React.render(
      <div className="grid-frame">
        <CommentBox2 url="comments.json" pollInterval={2000}/>
        <div className="grid-block">
          <a href="http://www.railsonmaui.com">
            <h3 className="open-sans-light">
              <div className="logo"/>
              Example of styling using image-url and Open Sans Light custom font
            </h3>
          </a>
          <a href="https://twitter.com/railsonmaui">
            <div className="twitter-image"/>
            Rails On Maui on Twitter
          </a>
        </div>
      </div>,
      document.getElementById('content')
    );
  }
};

$(function() {
  render();
  // Next part is to make this work with turbo-links
  $(document).on("page:change", () => {
    render();
  });
});
