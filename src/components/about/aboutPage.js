"use strict";

var React = require('react');
var withRouter = require('react-router').withRouter;

class About extends React.Component {
    componentWillMount() {
        // if (!confirm('Are you sure you want to read a page\'s this boring?')) {
        //     this.props.history.goBack();
        // }
    }

    componentDidMount() {
        //this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
        //console.log(this);
    }

    render() {
        return(
            <div>
                <h1>About</h1>
                <div>This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        );
    }
}

//module.exports = About;
module.exports = withRouter(About);
