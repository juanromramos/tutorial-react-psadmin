import React from 'react';
import { Link } from 'react-router-dom';
import AuthorStore from '../../stores/authorStore';
import AuthorList from './authorList';
var super_this;

class AuthorPage extends React.Component {
    constructor() {
        super();
        super_this = this;
        this.state = {
            authors: AuthorStore.getAllAuthors()
        }
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        super_this.setState({ authors: AuthorStore.getAllAuthors() });
    }

    render() {
        return(
            <div>
                <h1>Authors</h1>
                <Link to='/author' className='btn btn-success'>Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

export default AuthorPage;
