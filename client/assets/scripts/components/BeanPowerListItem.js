var React = require('react');

var BeanPowerListItem = React.createClass({

    render() {

        return(
            <div className="bean-power-item grid-content" key={this.props.power.power_name} >

                <span className="power-name">{this.props.power.power_name}</span>
                <span className="power-description">{this.props.power.power_description}</span>

            </div>
        )
    }
});

module.exports = BeanPowerListItem;
