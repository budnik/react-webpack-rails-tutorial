var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./App');

var BeanListPage = require('./pages/BeanListPage');
var BeanItemPage = require('./pages/BeanItemPage');
var BeanItemEditPage = require('./pages/BeanItemEditPage');
var LoginPage = require('./pages/LoginPage');

module.exports = (
    <Route handler={App} path='/'>
        <DefaultRoute name="home" handler={BeanListPage} />
        <Route name="login" handler={LoginPage}/>
        <Route name="beanItemPage" path="/bean/:beanID" handler={BeanItemPage} />
        <Route name="beanItemEditPage" path="/bean/:beanID/edit" handler={BeanItemEditPage} />
    </Route>
);
