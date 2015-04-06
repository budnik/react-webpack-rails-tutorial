var React = require('react');
var { Link } = require('react-router');

var BeanListItem = React.createClass({

    render() {
        var itemStyle = {
            color: this.props.bean.bean_color
        };

        return(
            <Link to='beanItemPage' params={{beanID: this.props.bean.bean_id}} className="grid-content small-6">
                <div className="card bean-list-item"style={itemStyle} key={this.props.bean.bean_id}>
                    <div className="card-divider">
                    {this.props.bean.bean_name}
                    </div>
                    <div className="card-section">
                        <ul>
                          <li>ololo lo lo!</li>
                          <li>ololo lo lo!</li>
                        </ul>
                    </div>
                </div>
            </Link>
        )
    }
});

module.exports = BeanListItem;
