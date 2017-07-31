import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/pluralsight-logo.png';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/' className='navbar-brand'>
                            <img alt='logo' width='150px' src={logo} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/authors">
                            <NavItem>Authors</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/courses">
                            <NavItem>Courses</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <NavItem>About</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#" className='disabled'>Sign In</NavItem>
                      <NavItem eventKey={2} href="#" className='disabled'>Sign Up</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default Header;
