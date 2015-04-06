var React = require('react');
var { Link } = require('react-router');


var SideBar = React.createClass({
    render: function() {
      return (
          <div zf-panel position="left" id="sidebar" className="medium-grid-block collapse medium-3 large-3 vertical">
            <div className="grid-content collapse shrink hide-for-medium">
              <a href="" className="secondary button expand" zf-close>Close</a>
            </div>
            <div className="grid-content collapse shrink">
              <Link to='home'>
                <img src="http://placehold.it/400x150&text=Payt Billing"/>
              </Link>
            </div>
            <div className="grid-content">
              
              <section className="block-list">
                <header>Invoices</header>
                <ul>
                  <li>
                    <a href="#">
                      Slam Book
                      <span className="block-list-label">7</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Foundation Chat
                      <span className="block-list-label">2</span>
                    </a>
                  </li>
                  <li>
                    <a className="success" href="#">
                      LolCats
                      <span className="block-list-label">2</span>
                    </a>
                  </li>
                </ul>
              </section>

              <section className="block-list">
                <header>Users</header>
                <ul>
                  <li>
                    <a href="#">
                      New
                      <span className="block-list-label">57</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Active
                      <span className="block-list-label">20</span>
                    </a>
                  </li>
                  <li>
                    <a className="success" href="#">
                      Inactive
                      <span className="block-list-label">32</span>
                    </a>
                  </li>
                </ul>
              </section>

              <section className="block-list">
                <header>Events</header>
                <ul>
                  <li>
                    <a href="#">
                      Calls
                      <span className="block-list-label">57</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="grid-content collapse shrink avatar-section">
                <img src="http://placehold.it/50x50"/>
                Regina George
            </div>
          </div>
        );
    }
});

module.exports = SideBar;
