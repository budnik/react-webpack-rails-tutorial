var $ = require('jquery');
// var React = require('react/addons');
// import CommentStore from '../stores/CommentStore';
// import CommentActions from '../actions/CommentActions';

// Next line is necessary for exposing React to browser for
// the React Developer Tools: http://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html
require("expose?React!react");

var marked = require("marked"); // markdown parser

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor foobar">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
  logError: function(xhr, status, err) {
    console.error(`Error loading comments from server!\nURL is ${this.props.url}\nstatus is ${status}\nerr is ${err.toString()}`);
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json'}).then(data => {
        this.setState({data: data});
      }, this.logError);
  },

  emptyFormData: { author: "", text: "" },

  handleCommentSubmit: function() {
    // `setState` accepts a callback. To avoid (improbable) race condition,
    // `we'll send the ajax request right after we optimistically set the new
    // `state.
    this.setState({ajaxSending: true});
    var comment = this.state.formData;
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: { comment: comment}}).then(data => {
        var comments = this.state.data;
        var newComments = React.addons.update(comments, { $push: [comment] } );
        this.setState({ajaxSending: false, data: newComments, formData: this.emptyFormData });
      }, (xhr, status, err) => {
        this.logError(xhr, status, err);
        this.setState({ajaxSending: false});
      });
  },

  getInitialState: function() {
    return {
      data: [],
      formData: this.emptyFormData,
      ajaxSending: false
    };
  },

  componentDidMount: function() {
    // CommentStore.listen(this.onCommentsChange);

    // CommentActions.fetchComments(this.props.url);
    //setInterval(CommentActions.fetchComments,
    //            this.props.pollInterval,
    //            this.props.url);

    //this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  componentWillUnmount() {
    // CommentStore.unlisten(this.onCommentsChange);
  },

  onCommentsChange: function() {
    // this.setState(CommentStore.getState());
  },

  onFormChange: function(obj) {
    this.setState({
      formData: obj
    })
  },

  render: function() {
    return (
      <div className="commentBox container">
        <h1>Comments { this.state.ajaxSending ? "AJAX SENDING!" : "" }</h1>
        <span onCommentSubmit={this.handleCommentSubmit}
                     formData={this.state.formData}
                     onChange={this.onFormChange}
                     ajaxSending={this.state.ajaxSending} />
        <span data={this.state.data} />
      </div>
    );
  }
});

export { CommentBox }
