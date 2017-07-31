import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './common/header';
import Home from './homePage';
import AuthorPage from './authors/authorPage';
import ManageAuthorPage from './authors/manageAuthorPage';
import CoursePage from './courses/coursePage';
import ManageCoursePage from './courses/manageCoursePage';
import About from './about/aboutPage';
import NotFoundPage from './notFoundPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route path='/authors' component={AuthorPage} />
                        <Route exact path='/author' component={ManageAuthorPage} />
                        <Route path='/author/:id' component={ManageAuthorPage} />

                        <Route path='/courses' component={CoursePage} />
                        <Route exact path='/course' component={ManageCoursePage} />
                        <Route path='/course/:id' component={ManageCoursePage} />

                        <Route path='/about' component={About} />
                        <Redirect from='/about-us' to='about' />

                        <Route component={NotFoundPage} />
                  </Switch>
                </div>
            </div>
        );
    };
}

export default App;
