import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
          <Jumbotron>
                <h1>Pluralsight Administration</h1>
                <p>React, React Router and Flux for ultra-responsive web apps.</p>
                <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
            </Jumbotron>
        );
    };
}

export default Home;
